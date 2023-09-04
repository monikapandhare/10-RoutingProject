

export interface Iproducts{
    pName: string;
    pId: number;
    pStatus: ProductStatus;
}

export enum ProductStatus{
    InProgress = "In Progress",
    Dispatched = "Dispatched",
    Delivered = "Delivered"

}

