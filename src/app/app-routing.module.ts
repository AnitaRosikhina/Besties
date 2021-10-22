import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'shop-all', loadChildren: () => import('./pages/shop-all-page/shop-all-page.module').then(m => m.ShopAllPageModule)
  },
  {
    path: 'dogs', loadChildren: () => import('./pages/dogs-page/dogs-page.module').then(m => m.DogsPageModule)
  },
  {
    path: 'cats', loadChildren: () => import('./pages/cats-page/cats-page.module').then(m => m.CatsPageModule)
  },

  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
