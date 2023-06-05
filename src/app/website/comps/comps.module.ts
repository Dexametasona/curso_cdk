import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './btn/btn.component';
import { NavbarComponent } from './navbar/navbar.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { NavBarCreateComponent } from './nav-bar-create/nav-bar-create.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CdkAccordionModule} from '@angular/cdk/accordion';


@NgModule({
  declarations: [
    BtnComponent,
    NavbarComponent,
    NavBarCreateComponent,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    RouterModule,
    FontAwesomeModule,
    CdkAccordionModule
  ],
  exports:[
    BtnComponent,
    NavbarComponent,
    NavBarCreateComponent
  ]
})
export class CompsModule { }
