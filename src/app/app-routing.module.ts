import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferComponent } from './components/transfer/transfer.component';
import { AgainTransferWithCssComponent } from './components/again-transfer-with-css/again-transfer-with-css.component';
import { FinanceComponent } from './components/finance/finance.component';
import { ExchangeGoodsComponent } from './components/exchange-goods/exchange-goods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:"transferCSS",pathMatch:"full"},
  {path:"transferBS",component:TransferComponent,title:"Trasfer Page (BS)"},
  {path:"transferCSS",component:AgainTransferWithCssComponent,title:"Trasfer Page (CSS)"},
  {path:"finance",component:FinanceComponent,title:"Finance"},
  {path:"goods",component:ExchangeGoodsComponent,title:"طلب صرف البضاعة"},
  {path:"**",component:NotFoundComponent, title:"Error 404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
