import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComputerCreateComponent } from './screens/computer-create/computer-create.component';
import { ComputerListComponent } from './screens/computer-list/computer-list.component';
import { CustomerCreateComponent } from './screens/customer-create/customer-create.component';
import { CustomerListComponent } from './screens/customer-list/customer-list.component';
import { ServiceCreateComponent } from './screens/service-create/service-create.component';
import { ServiceListComponent } from './screens/service-list/service-list.component';
import { UseDetailComponent } from './screens/use-detail/use-detail.component';

const routes: Routes = [
  { path: '', component: UseDetailComponent },
  { path: 'computer/create', component: ComputerCreateComponent },
  { path: 'computer/list', component: ComputerListComponent },
  { path: 'customer/create', component: CustomerCreateComponent },
  { path: 'customer/list', component: CustomerListComponent },
  { path: 'service/create', component: ServiceCreateComponent },
  { path: 'service/list', component: ServiceListComponent },
  { path: 'details', component: UseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
