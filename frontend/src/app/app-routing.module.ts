import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminGuard} from "./shared/guards/admin.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren: () => import('./layouts/admin/admin-layout.module').then(m => m.AdminLayoutModule),
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
