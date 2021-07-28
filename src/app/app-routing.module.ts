import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceReportComponent } from './invoice-report/invoice-report.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'report-invoice', component:InvoiceReportComponent
  },
  {
    path:'products', component: ProductListComponent
  },
  {
    path:'', redirectTo:"/", pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
