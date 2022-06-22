import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-material-test';
  myControl = new FormControl();
  options:string[] = ['jack','ross','T800']
}
