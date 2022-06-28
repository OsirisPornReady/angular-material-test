import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username?:string;
  password?:string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {name:string},
    public dialogRef: MatDialogRef<LoginComponent>
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
