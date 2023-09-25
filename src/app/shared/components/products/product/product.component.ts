import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/models/productsinterface';
import { ProductResolverService } from 'src/app/shared/services/product-resolver.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productId! : string;
  public productInfo! : Iproducts;
  constructor(private _route : ActivatedRoute, private _productService : ProductsService,
              private _productResolservice : ProductResolverService) { }

  ngOnInit(): void {
    // this.productId = this._route.snapshot.params['pId'];
    // this.productInfo = this._productService.getSingleProduct(this.productId)
    

    // this._route.params
    // .subscribe((params: Params) => {
    //   this.productId = params['pId'];
    //   this.productInfo = this._productService.getSingleProduct(this.productId)
    //   console.log(this.productInfo);
      
    // })
  }

  onRemoveProduct(){
    this._productService.removeProduct(this.productId)
  }



}
