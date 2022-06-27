import { Component } from '@angular/core';
import {MatDialog,MatDialogConfig} from "@angular/material/dialog";
import {DialogComponent} from "./components/dialog/dialog.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-material-test';
  options:string[] = ['jack','ross','T800']

  constructor(
    public matDialog: MatDialog
  ) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.matDialog.open(DialogComponent,{
      width:'450px',
      data:{name:'austin'}
    })
    dialogRef.afterClosed().subscribe((result) => {
      alert(result);
    });
  }

}
