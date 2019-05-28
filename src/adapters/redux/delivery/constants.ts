import { API_DOMAIN } from '../../../constants/index';

/** action types*/
export const SEND_DELIVERY_MESSAGE = 'SEND_DELIVERY_MESSAGE';
export const GET_DELIVERY_ACKNOWLEDGE = 'GET_DELIVERY_ACKNOWLEDGE';

/** api end point */
export const API = { 
  sendDeliveryMessage: {
      path:  `${API_DOMAIN}/messages`,
  }
};
  