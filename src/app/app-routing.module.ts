import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogintoappComponent } from './logintoapp/logintoapp.component';
import { CheckoutdetailsComponent } from './users/checkoutdetails/checkoutdetails.component';
import { SuccessfullcheckoutComponent } from './users/successfullcheckout/successfullcheckout.component';


const routes: Routes = [
  {
    path:'',
    component: LogintoappComponent
  },
  { path: 'users', 
  loadChildren: () => import('./users/users.module').then(m => m.UsersModule) 
  },
  {
    path: 'pizza-admin',
    loadChildren: () => import('./pizza-admin/pizza-admin.module').then(m => m.PizzaAdminModule)
  },
  {
    path:'app-checkoutdetails',
    component: CheckoutdetailsComponent
  },
  {
    path:'app-successfullcheckout',
    component: SuccessfullcheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
