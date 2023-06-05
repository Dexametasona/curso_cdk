import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardingPagesRoutingModule } from './boarding-pages-routing.module';
import { BoardingPagesComponent } from './boarding-pages.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { RecentComponent } from './recent/recent.component';
import { CompsModule } from '../comps/comps.module';


@NgModule({
  declarations: [
    BoardingPagesComponent,
    WorkspaceComponent,
    RecentComponent
  ],
  imports: [
    CommonModule,
    BoardingPagesRoutingModule,
    CompsModule
  ]
})
export class BoardingPagesModule { }
