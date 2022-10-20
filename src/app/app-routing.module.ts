import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import {WelcomeComponent} from './Components/welcome/welcome.component';
import {ProductsComponent} from './Components/products/products.component';
import {PaymentOrderComponent} from './Components/payment-order/payment-order.component';

//Array de rutas
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: "home", component: HomeComponent},
  { path: "welcome", component: WelcomeComponent},
  { path: "products", component: ProductsComponent},
  { path: "payOrder", component: PaymentOrderComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
