import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialoge',
  templateUrl: './delete-dialoge.component.html',
  styleUrls: ['./delete-dialoge.component.css']
})
export class DeleteDialogeComponent implements OnInit {

  constructor(private _dialogeRef:MatDialogRef<DeleteDialogeComponent>,
     @Inject(MAT_DIALOG_DATA) public data:any ) { }

  ngOnInit(): void {

  }
  confirmDelete() {
    
    this._dialogeRef.close(true); // Close the dialog and pass true to indicate deletion confirmed
  }

  cancelDelete() {
    this._dialogeRef.close(false); // Close the dialog without deleting
  }

}
