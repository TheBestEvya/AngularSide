import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';



const routes: Routes = [
 { path:"main" , component:MainComponent},
 { path:"login" , component:LoginComponent},
 { path:"coupons" , component:CouponsComponent},
 { path:"Company" , component:CompaniesComponent},
 { path:"Administrator" , component:AdminComponent},
 {path: "Customer" , component : CustomerComponent},
 { path:"" , redirectTo:"main" , pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
