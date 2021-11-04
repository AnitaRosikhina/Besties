import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./admin-layout.component";

const routes: Routes = [
  {path: '', component: AdminLayoutComponent, children: [
      {
        path: 'subcategories-addition',
        loadChildren: () => import('./pages/subcategories-addition-page/subcategories-addition-page.module').then(m => m.SubcategoriesAdditionPageModule)
      },
      {
        path: 'product-addition',
        loadChildren: () => import('./pages/product-addition-page/product-addition-page.module').then(m => m.ProductAdditionPageModule)
      },
      {path: '', redirectTo: 'product-addition'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
