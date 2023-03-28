import { Injectable } from '@angular/core';

import { Stock } from './class-stock/stock';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public dataStock:Array<Stock>;
 

 
  
  
  constructor() { 
    
    this.dataStock=[
      new Stock('AAPL', 109.68, 0.19, true,false),
      new Stock('GOOG', 747.32, 0.60, false,false),
      new Stock('FB', 115.31, 0.21, true,false),
      new Stock('AMZN', 739.00, 4.65, false,false),
      new Stock('TWTR', 17.98, 0.05, false,false),
      new Stock('BTC',12000,0.9,true,false),
      new Stock('ETC',100,0.05,false,false),
    ]
    
  }

}
