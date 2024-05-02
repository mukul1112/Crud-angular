
import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialougeComponent } from '../dialouge/dialouge.component';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dialougeoverview',
  templateUrl: './dialougeoverview.component.html',
  styleUrls: ['./dialougeoverview.component.css']
})
export class DialougeoverviewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialougeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
