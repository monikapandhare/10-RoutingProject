import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproducts, ProductStatus } from 'src/app/shared/models/productsinterface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  public productId! : number;
  public productObj! : Iproducts;

  constructor(private _routes : ActivatedRoute, private _prodService : ProductsService) { }

  ngOnInit(): void {
    this.productId = +this._routes.snapshot.params['pId'];
    this.productObj = this._prodService.getSingleProduct(this.productId)
   
  }

  onUpdatePrdct(pname:HTMLInputElement,pstatus:HTMLSelectElement){
    let obj : Iproducts={
      pName : pname.value,
      pStatus : pstatus.value as ProductStatus,
      pId : this.productId

    }
    this._prodService.getUpdateProduct(obj)
  }

}
