import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproducts } from '../../models/productsinterface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
public pArray : Array<Iproducts>=[];
public selectedPrdId ! :string;
defaultSelectProdct! : Iproducts 
  constructor(private _productService:ProductsService) { }

  ngOnInit(): void {
    this.pArray=this._productService.getAllProducts()
    console.log(this.pArray);
    this.defaultSelectProdct =  this.pArray[0]
    console.log(this.defaultSelectProdct)
    
  }

}
