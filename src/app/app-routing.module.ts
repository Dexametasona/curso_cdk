import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'website',
    loadChildren: () =>
      import('./website/website.module').then((route) => route.WebsiteModule),
  },
  { path: '', redirectTo: 'website', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
