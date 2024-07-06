import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferComponent } from './components/transfer/transfer.component';
import { AgainTransferWithCssComponent } from './components/again-transfer-with-css/again-transfer-with-css.component';
import { FinanceComponent } from './components/finance/finance.component';
import { ExchangeGoodsComponent } from './components/exchange-goods/exchange-goods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SheetComponent } from './components/sheet/sheet.component';

const routes: Routes = [
  {path:'',redirectTo:"sheet",pathMatch:"full"},
  {path:"transferBS",component:TransferComponent,title:"التحويلات 1"},
  {path:"transferCSS",component:AgainTransferWithCssComponent,title:"التحويلات 2"},
  {path:"finance",component:FinanceComponent,title:"حساب الضريبة"},
  {path:"goods",component:ExchangeGoodsComponent,title:"طلب صرف البضاعة"},
  {path:"sheet",component:SheetComponent,title:"Progress Notes"},
  {path:"**",component:NotFoundComponent, title:"Error 404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
