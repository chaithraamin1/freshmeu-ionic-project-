import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'footer', loadChildren: './footer/footer.module#FooterPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'bulkorder', loadChildren: './bulkorder/bulkorder.module#BulkorderPageModule' },
  { path: 'summary', loadChildren: './summary/summary.module#SummaryPageModule' },
  { path: 'moredetails', loadChildren: './moredetails/moredetails.module#MoredetailsPageModule' },
  { path: 'moredetail', loadChildren: './moredetail/moredetail.module#MoredetailPageModule' },
  { path: 'moredetals1', loadChildren: './moredetals1/moredetals1.module#Moredetals1PageModule' },
  { path: 'moredetail2', loadChildren: './moredetail2/moredetail2.module#Moredetail2PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
