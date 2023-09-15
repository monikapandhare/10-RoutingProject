import { Injectable } from '@angular/core';
import { Iproducts, ProductStatus } from '../models/productsinterface';
import { Router } from '@angular/router';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
public productsArray  :Array<Iproducts> = [
  {
    pName : "Samsung",
    pId : '123',
    pStatus : ProductStatus.InProgress,
    canReturn :1
    
  },
  {
    pName : "sony 32",
    pId : '456',
    pStatus :ProductStatus.Dispatched,
    canReturn :0
  },
  {
    pName : "Lenovo",
    pId : '789',
    pStatus : ProductStatus.Delivered,
    canReturn :1
  },
]
  constructor(private _router:Router,
              private _utilityService:UtilityService) { }
 getAllProducts(){
  return this.productsArray;
 }
 getSingleProduct(id:string){
  return this.productsArray.find(product =>{
    return product.pId === id
  })!
 }
 getUpdateProduct(prdtObj : Iproducts){
   this.productsArray.forEach(prd=>{
    if(prd.pId === prdtObj.pId){
      prd.pName = prdtObj.pName,
      prd.pStatus = prdtObj.pStatus,
      prd.pId = prdtObj.pId
      this._router.navigate(['/products'])
    }
   })
 }

 addNewProduct(newPrd:Iproducts){
  this.productsArray.unshift(newPrd);
  this._router.navigate(['/products'])
 }
  removeProduct(id:string){
    let getIndex = this.productsArray.findIndex(obj=>obj.pId === id)
    let deletPrd = this.productsArray.splice(getIndex,1)
    this._router.navigate(['/products'])
  }
   
}
