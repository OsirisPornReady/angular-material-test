import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../login/login.component";


import {MatDialog,MatDialogConfig} from "@angular/material/dialog";
import { Router } from "@angular/router";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  constructor(
    public matDialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.matDialog.open(LoginComponent,{
      data:{name:'austin'}
    })
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result == 'login success!') {
        this.router.navigate(['/mainpage']);
      }
    });
  }

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }


}
