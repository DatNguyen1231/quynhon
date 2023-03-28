export class Stock {
    public favorite = false;

    constructor(
        public name: string,
        public price: number,
        public priceChange: number,
        public positive: boolean,

        public love:boolean,
    ) {}

    changePercent() {
        return ((this.priceChange/this.price)*100).toFixed(2);
    }

    
    
}
