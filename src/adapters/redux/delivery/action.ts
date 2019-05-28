import { SEND_DELIVERY_MESSAGE } from "./constants";
import { DeliveryAction } from "./types";

/**
 * Dispatch actions from delivery message system
 * 
 * @param message 
 * @param localId 
 */
export const getSendDeliveryAction = (
    message: string,
    localId: string
  ): DeliveryAction => ({
    type: SEND_DELIVERY_MESSAGE,
    payload: { message, localId } 
  });