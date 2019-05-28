import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import { deliveryReducer } from '../../adapters/redux/delivery/reducers';
import { Provider, connect } from 'react-redux';
import { MessageList } from './MessageList';
import { DeliveryAction } from '../../adapters/redux/delivery/types';
import { getSendDeliveryAction } from '../../adapters/redux/delivery/action';
import createSagaMiddleware from '@redux-saga/core';
import { watcherSaga } from '../../adapters/redux/delivery/sagas/sendDeliveryMessage.saga';
import { DELIVERY_INITIAL_STATE } from '../../adapters/redux/delivery/state';
import DeliveryItems from './DeliveryItems';

interface DeliveryMessagesProps {
}

interface DeliveryMessagesState {
}

/** 
 * 
 * Base component - store, navigation start
*/
export default class DeliveryMessages extends React.PureComponent<DeliveryMessagesProps,DeliveryMessagesState> {

  store: Store<any>;
  
  constructor(props:DeliveryMessagesProps) {
    super(props);

    //Creating redux store
    const sagaMiddleware = createSagaMiddleware();
    this.store = createStore(deliveryReducer, applyMiddleware(sagaMiddleware)); // integrating reducers and middleware saga
    sagaMiddleware.run(watcherSaga);
  }

  render() {
    return (
      <Provider store={ this.store }>
        <View style={styles.container}>
          <DeliveryItems/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#F5FCFF',
  }
});
