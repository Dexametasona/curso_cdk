import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePagesComponent } from './create-pages.component';
import { HomeComponent } from './home/home.component';
import { BoardsComponent } from './boards/boards.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [{ path: '', component: CreatePagesComponent, children:[
  {path:'home', component:HomeComponent},
  {path:'boards', component:BoardsComponent},
  {path:'template', component:TemplateComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePagesRoutingModule {}
