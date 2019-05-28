import { call, takeLatest, put, select } from 'redux-saga/effects';
import { API, SEND_DELIVERY_MESSAGE, GET_DELIVERY_ACKNOWLEDGE } from '../constants';
import { DeliveryAction, Delivery } from '../types';
import { get } from 'lodash';
import { getMessages } from '../selectors';

export function* sendDeliveryMessage(action: DeliveryAction){
    const { message, localId } = action.payload;
    const headers = { 'Content-Type': 'application/json' };
    const body = { message, localId };
    try {
        const deliverResponse = yield call(fetchDeliveryAcknowledge, API.sendDeliveryMessage.path, headers, body); // sending to heroku remote api
        yield put({ type: GET_DELIVERY_ACKNOWLEDGE ,  
            payload: { message: get(deliverResponse,'message'), id: get(deliverResponse,'id'), localId: get(deliverResponse,'localId'), isDeliverd: true}}); // updating the delivery status
    }catch (error) {
        console.log(error);
    }
}

export const fetchDeliveryAcknowledge = (url: string, headers:any, body:any) => fetch( url, { 
    method: 'POST', 
    headers:headers,
    body: JSON.stringify(body)
}).then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
});


export function* watcherSaga() {
    yield takeLatest(SEND_DELIVERY_MESSAGE, sendDeliveryMessage);
}
