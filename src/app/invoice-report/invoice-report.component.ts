import {  Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TelerikReportViewerComponent } from '@progress/telerik-angular-report-viewer';


@Component({
  selector: 'app-invoice-report',
  templateUrl: './invoice-report.component.html',
  styleUrls: ['./invoice-report.component.css']
})
export class InvoiceReportComponent{

  @ViewChild('viewer1') viewer1: TelerikReportViewerComponent;

  viewerContainerStyle = {
    position: 'relative',
    width: '1000px',
    height: '800px',
    ['font-family']: 'ms sans serif'
  };

  InvoiceForm: FormGroup = this.formBuilder.group({
    OrderId: new FormControl()
  });

  InvoiceOrderId:number = 10954;

  constructor(private formBuilder: FormBuilder,) { 
    this.viewer1 = new TelerikReportViewerComponent();
  }

  GetInvoice()
  {
    this.viewer1.setReportSource({...this.viewer1.reportSource, parameters: { OrderId:this.InvoiceForm.get("OrderId")?.value} });
    this.viewer1.refreshReport();
  }

}
