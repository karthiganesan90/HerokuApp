import { DELIVERY_INITIAL_STATE } from "./state";
import { SEND_DELIVERY_MESSAGE, GET_DELIVERY_ACKNOWLEDGE } from "./constants";
import { DeliveryAction } from "./types";

/**
 * Delivery reducer
 * @param state 
 * @param action 
 */
export const deliveryReducer = (state = DELIVERY_INITIAL_STATE, action: DeliveryAction) => {
    switch (action.type) {
      case SEND_DELIVERY_MESSAGE:
        return {
            ...state,
            messages: [...state.messages, { message: action.payload.message, localId: action.payload.localId, isDeliverd: false }]
        };
      case GET_DELIVERY_ACKNOWLEDGE:
        let messages = state.messages;
        messages.pop();
        return {
            messages: [...messages, action.payload],
        };
      default:
        return state;
    }
};