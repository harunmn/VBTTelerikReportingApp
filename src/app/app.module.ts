import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TelerikReportingModule } from '@progress/telerik-angular-report-viewer';
import { InvoiceReportComponent } from './invoice-report/invoice-report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceReportComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TelerikReportingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
