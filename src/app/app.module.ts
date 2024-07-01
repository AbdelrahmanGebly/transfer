import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { AgainTransferWithCssComponent } from './components/again-transfer-with-css/again-transfer-with-css.component';
import { FinanceComponent } from './components/finance/finance.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    AgainTransferWithCssComponent,
    FinanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
