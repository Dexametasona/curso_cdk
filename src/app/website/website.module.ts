import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { WebsiteLayoutComponent } from './website-layout/website-layout.component';
import { WebsiteRoutingModule } from './website-routing.module';



@NgModule({
  declarations: [
    WebsiteLayoutComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    WebsiteRoutingModule
  ],
  exports:[
    WebsiteLayoutComponent
  ]
})
export class WebsiteModule { }
