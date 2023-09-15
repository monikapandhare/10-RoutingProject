import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Iproducts, ProductStatus } from 'src/app/shared/models/productsinterface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  public productId! : string;
  public productObj! : Iproducts;
  canEdit: number = 1
 

  constructor(private _routes : ActivatedRoute, 
              private _prodService : ProductsService,
              private _utilityservice : UtilityService) { }

  ngOnInit(): void {
    this.productId = this._routes.snapshot.params['pId'];
    this.productObj = this._prodService.getSingleProduct(this.productId)

    // console.log(this._routes.snapshot.queryParams);
    // this.canEdit = this._routes.snapshot.queryParams['canEdit']

    this._routes.queryParams
           .subscribe((queryParam : Params)=>{
              console.log(queryParam);
             if(queryParam.hasOwnProperty('canEdit'))
             this.canEdit = +queryParam['canEdit']
           })
    
   
  }

  onUpdatePrdct(pname:HTMLInputElement,pstatus:HTMLSelectElement){
    let obj : Iproducts={
      pName : pname.value,
      pStatus : pstatus.value as ProductStatus,
      pId : this.productId,
      canReturn : this.productObj.canReturn
}
  this._prodService.getUpdateProduct(obj)
    }
    

    onAddPrd(name:HTMLInputElement,status:HTMLSelectElement){
      
        let obj:Iproducts={
          pName: name.value as string,
          pId: this._utilityservice.generateUuid(),
          pStatus: status.value as ProductStatus,
          canReturn:Math.random() >= 5 ? 1 : 0
        }
        this._prodService.addNewProduct(obj)
      
    }
  }



