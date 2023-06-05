import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePagesRoutingModule } from './create-pages-routing.module';
import { CreatePagesComponent } from './create-pages.component';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';
import { BoardsComponent } from './boards/boards.component';
import { CompsModule } from '../../comps/comps.module';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    CreatePagesComponent,
    HomeComponent,
    TemplateComponent,
    BoardsComponent
  ],
  imports: [
    CommonModule,
    CreatePagesRoutingModule,
    CompsModule,
    DragDropModule
  ]
})
export class CreatePagesModule { }
