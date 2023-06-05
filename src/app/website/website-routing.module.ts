import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteLayoutComponent } from './website-layout/website-layout.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      {
        path: 'boardingPages',
        loadChildren: () =>
          import('./boarding-pages/boarding-pages.module').then(
            (m) => m.BoardingPagesModule
          ),
      },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
