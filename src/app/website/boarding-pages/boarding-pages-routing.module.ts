import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardingPagesComponent } from './boarding-pages.component';
import { RecentComponent } from './recent/recent.component';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes = [
  {
    path: '',
    component: BoardingPagesComponent,
    children: [
      {
        path: 'createPages',
        loadChildren: () =>
          import('./create-pages/create-pages.module').then(
            (m) => m.CreatePagesModule
          ),
      },
      {path:'recent', component:RecentComponent},
      {path:'workspace', component:WorkspaceComponent},
      {path:'', redirectTo:'createPages', pathMatch:'full'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardingPagesRoutingModule {}
