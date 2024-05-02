import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialougeoverviewComponent } from '../dialougeoverview/dialougeoverview.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialouge',
  templateUrl: './dialouge.component.html',
  styleUrls: ['./dialouge.component.css']
})
export class DialougeComponent{
  animal: string='' ;
  name: string='';
  constructor(public dialog: MatDialog) { }

  

  openDialog(): void {
    const dialogRef = this.dialog.open(DialougeoverviewComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
