import { Component, OnInit } from '@angular/core';
import { CommanServiceService } from 'src/app/comman-service.service';


@Component({
  selector: 'app-checkoutdetails',
  templateUrl: './checkoutdetails.component.html',
  styleUrls: ['./checkoutdetails.component.css']
})
export class CheckoutdetailsComponent implements OnInit {
  productselected:any = [];
  finalproduct:number ;
  finalcost:number=0;
  checkpay:boolean;
  displayselectedproduct:object ={}
  constructor(private checkoutresult:CommanServiceService) { 
    this.checkpay = true;
  }

  ngOnInit() {
    this.productselected = this.checkoutresult.Finalselected;
    console.log(JSON.stringify(this.productselected)+"current component");
    console.log(this.productselected[1].productname);
    for(let i=0; i<this.productselected.length; i++){
    
      this.finalproduct = this.productselected[i].productprice*this.productselected[i].quantity;
      this.finalcost = this.finalcost + this.finalproduct; 
      console.log(this.finalcost); 
    }

   
    
   // console.log(this.finalcost+"hggkjgkjgi");
    
    
  }

  paymentcheck(event){
    if ( event.target.checked ) {     
      this.checkpay = false;
    }
    else{
      this.checkpay = true;
    }
  }

}
