import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainpageComponent} from "./components/mainpage/mainpage.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {VideodetailComponent} from "./components/videodetail/videodetail.component";

const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'welcome',component:WelcomeComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'videodetail',component:VideodetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
