import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {

  username?:string;
  password?:string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {name:string},
    public dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.data.name);
  }

  login(): void {
    let dialogMsg;
    if (this.username == 'ash' && this.password == '123') {
      dialogMsg = 'login success!';
    } else {
      dialogMsg = 'not a user!';
    }
    this.dialogRef.close(dialogMsg);
  }

  cancel(): void {
    this.dialogRef.close();
  }


}
