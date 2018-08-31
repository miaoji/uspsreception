import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OrdersendComponent } from './ordersend/ordersend.component';
import { SiteComponent } from './site/site.component';
import { SendComponent } from './send/send.component';
import { PrescriptionComponent } from './prescription/prescription.component';
const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ordersend',
    component: OrdersendComponent
  },
  {
    path: 'site',
    component: SiteComponent
  },
  {
    path: 'send',
    component: SendComponent
  },
  {
    path: 'prescription',
    component: PrescriptionComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
