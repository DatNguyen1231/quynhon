import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/data-stock/class-stock/stock';
import { DataService } from 'src/app/data-stock/data.service';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
 // public stock: Stock;
 // public stockClasses: { increase: boolean; decrease: boolean; };

  check :boolean=true;
 // public stocks: Array<Stock>;
  public favoriteStocks:Array <Stock>;
 
  constructor(public comt:DataService)
  { 
    //this.tuoi=common.tuoi;
  }
  
  
  ngOnInit() {
    

    this.favoriteStocks = [];
  }

  toggleFavorite(index: number) {
   

    
      this.comt.dataStock[index].favorite =true;
      this.comt.dataStock[index].love=true;
    

    
    
    
  }
  xoa(i :number){
    this.comt.dataStock[i].love=false;
    this.comt.dataStock[i].favorite =false;
  }
  
}
