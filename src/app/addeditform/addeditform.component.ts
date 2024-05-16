import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';



@Component({
  selector: 'app-addeditform',
  templateUrl: './addeditform.component.html',
  styleUrls: ['./addeditform.component.css']
})
export class AddeditformComponent implements OnInit {

  empForm:FormGroup;

  constructor( private _fb:FormBuilder ,private _empservice:EmployeeService,
    private _dialogeRef:MatDialogRef<AddeditformComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    
    private _coreServices:CoreService
    
  ) { 
    this.empForm=this._fb.group({
      firstname:'',
      lastname:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      ctc:''

    })
  }

  ngOnInit(): void {

    this.empForm.patchValue(this.data);
  }
  education :string[]=[
    'Metric','Diploma','InterMediate','Graduate','PostGraduate'
  ]
  onSubmitForm(){
    if(this.empForm.valid){
      
      if(this.data){
        console.log(this.empForm.value)
        this._empservice.updateEmployee(this.data.id,this.empForm.value).subscribe({
          next:(val:any)=>{
              //alert("employe updated succesfully");
              this._coreServices.openSnackBar("employe updated!","ok")
              this._dialogeRef.close(true);
              
          },
          error:(err)=>{
            console.log(err);
          }
        })
      }else{
        console.log(this.empForm.value)
      this._empservice.addEmployee(this.empForm.value).subscribe({
        next:(val:any)=>{
            //alert("employe added succesfully");
            this._coreServices.openSnackBar("employe added !","ok")
            this._dialogeRef.close(true);
            
        },
        error:(err)=>{
          console.log(err);
        }
      })

      }
      
      
    }
  }
  oncancelform(){
    this._dialogeRef.close(false);
  }
}
