import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { AgainTransferWithCssComponent } from './components/again-transfer-with-css/again-transfer-with-css.component';
import { FinanceComponent } from './components/finance/finance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExchangeGoodsComponent } from './components/exchange-goods/exchange-goods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    AgainTransferWithCssComponent,
    FinanceComponent,
    NavbarComponent,
    ExchangeGoodsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
