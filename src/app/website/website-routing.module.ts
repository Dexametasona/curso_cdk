import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WebsiteLayoutComponent } from "./website-layout/website-layout.component";
import { LoginComponent } from "./pages/login/login.component";
const routes:Routes=[
  {path:'', component:WebsiteLayoutComponent, children:[
    {path:'login', component:LoginComponent},
    {path:'', redirectTo:'login', pathMatch:"full"}
  ]}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class WebsiteRoutingModule{}
