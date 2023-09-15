

export interface Iproducts{
  
    pName: string;
    pId: string;
    pStatus: ProductStatus;
    canReturn : number;
}

export enum ProductStatus{
    InProgress = "In Progress",
    Dispatched = "Dispatched",
    Delivered = "Delivered"

}

