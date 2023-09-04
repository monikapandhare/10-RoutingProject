import { Injectable } from '@angular/core';
import { Iproducts, ProductStatus } from '../models/productsinterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
public productsArray  :Array<Iproducts> = [
  {
    pName : "Samsung",
    pId : 123,
    pStatus : ProductStatus.InProgress
  },
  {
    pName : "sony 32",
    pId : 456,
    pStatus : ProductStatus.Dispatched
  },
  {
    pName : "Lenovo",
    pId : 789,
    pStatus : ProductStatus.Delivered
  },
]
  constructor() { }
 getAllProducts(){
  return this.productsArray;
 }
 getSingleProduct(id:number){
  return this.productsArray.find(product =>{
    return product.pId === id
  })!
 }
}
