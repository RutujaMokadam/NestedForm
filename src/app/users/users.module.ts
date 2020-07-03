import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListofproductComponent } from './listofproduct/listofproduct.component';
import { CheckoutdetailsComponent } from './checkoutdetails/checkoutdetails.component';
import { MatIconModule } from '@angular/material/icon';
import { SuccessfullcheckoutComponent } from './successfullcheckout/successfullcheckout.component'

@NgModule({
  declarations: [
    UsersComponent, 
    ListofproductComponent,
    CheckoutdetailsComponent,
    SuccessfullcheckoutComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatIconModule
  ]
})
export class UsersModule { }
