import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStockComponent } from './add-stock/add-stock.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';

const routes: Routes = [
 {path: 'create-stock',component:CreateStockComponent},
 {path:'stock-item',component:StockItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
