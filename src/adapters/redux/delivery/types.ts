export interface DeliveryAction {
   type: string,
   payload: any
}

export interface Delivery {
    message: string,
    localId: string,
    isDeliverd: boolean,
    id?: string
 }