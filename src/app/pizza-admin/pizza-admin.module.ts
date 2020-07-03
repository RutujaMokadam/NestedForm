import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaAdminRoutingModule } from './pizza-admin-routing.module';
import { PizzaAdminComponent } from './pizza-admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [PizzaAdminComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    PizzaAdminRoutingModule
  ]
})
export class PizzaAdminModule { }
