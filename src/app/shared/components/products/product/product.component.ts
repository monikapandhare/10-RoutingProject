import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproducts } from 'src/app/shared/models/productsinterface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productId! : number;
  public productInfo! : Iproducts;
  constructor(private _route : ActivatedRoute, private _productService : ProductsService) { }

  ngOnInit(): void {
    this.productId = +this._route.snapshot.params['pId'];
    this.productInfo = this._productService.getSingleProduct(this.productId)
    
  }


}