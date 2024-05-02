import { Component, OnInit ,ViewChild} from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddeditformComponent } from '../addeditform/addeditform.component';
import { CoreService } from '../core/core.service';
import { DeleteDialogeComponent } from '../delete-dialoge/delete-dialoge.component';


interface Employee {
  id: string;
  firstname: string;
  lastname: string;
  gender: string;
  dob: string; // Assuming date of birth is a string in ISO 8601 format
  email: string;
  education: string;
  experience: number;
  company: string;
  package: number;
}
@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  constructor(private _empService:EmployeeService,private _dailoge:MatDialog,
    private _coreService:CoreService
  ) { }
  displayedColumns: string[] = ['id', 
    'firstname', 
    'lastname', 
    'email',
    'company',
    'dob',
    'education',
    'experience',
    'gender',
    'package',
    'action'
  ];
 
  dataSource!: MatTableDataSource<any>; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getEmpolyee();
    
  }
  getEmpolyee(){
    this._empService.getEmployees().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
      },
      error:(err)=>{
        console.log(err);

      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id:any){
    this._empService.deleteEmployee(id).subscribe({
      next:(res:any)=>{
        //alert("employee deleted with id " + id)
        this._coreService.openSnackBar("employee deleted!","Done")
        this.getEmpolyee();

      },
      error:(err:any)=>{
        console.log(err);
      }
    })
    
    }

    openEditForm(data:any){
      const dialogeRef=this._dailoge.open(AddeditformComponent,{
        data,

      });
      dialogeRef.afterClosed().subscribe({
      next:(val:any)=>{
       if(val){
        this.getEmpolyee();
       }
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
      }
    })
    }

    openDeleteForm(data
      :any){
      const dialogeRef=this._dailoge.open(DeleteDialogeComponent,{
        data,

      });
      dialogeRef.afterClosed().subscribe({
      next:(val:any)=>{
       if(val){
        this.deleteEmployee(data.id);
       }
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
      }
    })

    }
    
    openaddeditform(){
      const dialogeRef= this._dailoge.open(AddeditformComponent)
      dialogeRef.afterClosed().subscribe({
       next:(val:any)=>{
         this.getEmpolyee();
       }
      })
     }

  

  
}
