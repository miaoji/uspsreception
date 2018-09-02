import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { OrdersendComponent } from './page/ordersend/ordersend.component';
import { SiteComponent } from './page/site/site.component';
import { SendComponent } from './page/send/send.component';
import { PrescriptionComponent } from './page/prescription/prescription.component';
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
