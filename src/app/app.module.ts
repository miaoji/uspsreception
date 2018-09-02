import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { HeaderComponent } from './component/header/header.component';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { OrdersendComponent } from './page/ordersend/ordersend.component';
import { SiteComponent } from './page/site/site.component';
import { SendComponent } from './page/send/send.component';
import { PrescriptionComponent } from './page/prescription/prescription.component';
import { FooterComponent } from './component/footer/footer.component';
import { DataService } from './services/data.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    OrdersendComponent,
    SiteComponent,
    SendComponent,
    PrescriptionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [DataService, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
