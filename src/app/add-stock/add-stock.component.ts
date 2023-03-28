import { Component } from '@angular/core';

import { DataService } from '../data-stock/data.service';
import { Stock } from '../data-stock/class-stock/stock';
@Component({
  selector: 'app-create-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class CreateStockComponent {
  
  stock = { name: '', price: 0,priceChange:0 ,check:true };

  public tam:Array<Stock>
 // public tam1:Array<Stock>

  constructor(public comt:DataService)
  { 
    this.tam=[];
    
  }
  onSubmit() {
   
    // this.tam = [
    //   new Stock(this.stock.name,this.stock.price,this.stock.priceChange,this.stock.check),
    // ];
   
    this.tam=[ new Stock(this.stock.name,this.stock.price,this.stock.priceChange,this.stock.check,false),] 
    //this.comt.tam.push(this.tam[0])
   // console.log(this.stock);
  }
  addToFavorte(i:number){
   
    
    this.comt.dataStock.push(this.tam[i]);
    alert("success ");
   
  }
}
