import { Component, OnInit } from '@angular/core';
import { productlist } from '../collectionfiles/product';
import { CommanServiceService } from 'src/app/comman-service.service';

@Component({
  selector: 'app-listofproduct',
  templateUrl: './listofproduct.component.html',
  styleUrls: ['./listofproduct.component.css']
})
export class ListofproductComponent implements OnInit {
  products:any;
  noofitems = 1;
  
  singleproduct:any;
  productselected:any = [];
  porductchecked:boolean = false;
  constructor( private checkout: CommanServiceService) { }

  ngOnInit(): void {
    this.products = productlist;

  }
   additems(item){
    item.quantity++;
   }
  getItems(product){
    this.porductchecked = true;
    console.log(product);
    product.quantity++;
    this.productselected.push(product);
    this.checkout.Finalselected = this.productselected;
    console.log(this.checkout.Finalselected);
  }

}
