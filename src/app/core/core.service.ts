import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor( private _snakbar:MatSnackBar) { }

  openSnackBar(message:string,action:string){
    this._snakbar.open(message,action,{
      duration:5000,
      verticalPosition:'top'
    })
  }
}
