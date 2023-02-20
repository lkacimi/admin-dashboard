import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path: 'users', component: UsersComponent},
  {path: 'products', component: ProductsComponent},
  {path:'orders', component: OrdersComponent},
  {path: 'shipments', component: ShipmentsComponent},
  {path: 'payments', component: PaymentsComponent},
  {path:'login', component:LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
