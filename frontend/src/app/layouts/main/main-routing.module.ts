import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main.component";

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'shop-all',
        loadChildren: () => import('./pages/shop-all-page/shop-all-page.module').then(m => m.ShopAllPageModule)
      },
      {
        path: 'dogs', loadChildren: () => import('./pages/dogs-page/dogs-page.module').then(m => m.DogsPageModule)
      },
      {
        path: 'cats', loadChildren: () => import('./pages/cats-page/cats-page.module').then(m => m.CatsPageModule)
      },
      {
        path: 'birds', loadChildren: () => import('./pages/birds-page/birds-page.module').then(m => m.BirdsPageModule)
      },
      {
        path: 'fish-and-aquatics',
        loadChildren: () => import('./pages/fish-and-aquatics-page/fish-and-aquatics-page.module').then(m => m.FishAndAquaticsPageModule)
      },
      {
        path: 'small-animals',
        loadChildren: () => import('./pages/small-animals-page/small-animals-page.module').then(m => m.SmallAnimalsPageModule)
      },
      {
        path: 'reptiles',
        loadChildren: () => import('./pages/reptiles-page/reptiles-page.module').then(m => m.ReptilesPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
      },
      {
        path: 'details',
        loadChildren: () => import('./pages/products-details/products-details.module').then(m => m.ProductsDetailsModule)
      },
      {path: '', redirectTo: 'home'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
