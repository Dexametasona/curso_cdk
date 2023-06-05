import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteLayoutComponent } from './website-layout/website-layout.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { LoginComponent } from './login/login.component';
import { CompsModule } from './comps/comps.module';


@NgModule({
  declarations: [
    WebsiteLayoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    CompsModule
  ],

})
export class WebsiteModule { }
