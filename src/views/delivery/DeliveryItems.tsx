import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import { deliveryReducer } from '../../adapters/redux/delivery/reducers';
import { Provider, connect } from 'react-redux';
import { MessageList } from './MessageList';
import { DeliveryAction, Delivery } from '../../adapters/redux/delivery/types';
import { getSendDeliveryAction } from '../../adapters/redux/delivery/action';
import createSagaMiddleware from '@redux-saga/core';
import { watcherSaga } from '../../adapters/redux/delivery/sagas/sendDeliveryMessage.saga';
import { DELIVERY_INITIAL_STATE } from '../../adapters/redux/delivery/state';

interface DeliveryItemsProps {
  messages: Delivery[];
  deliverMsg(message: string, localId: string): DeliveryAction;
}

interface DeliveryItemsState {
  message: string;
}

/** 
 * 
 * Displaying delivery messages and the status of the delivery
*/
class DeliveryItems extends React.PureComponent<DeliveryItemsProps,DeliveryItemsState> {

  constructor(props:DeliveryItemsProps) {
    super(props);
    this.state = { message: '' };
  }

  render() {
    const {messages} = this.props;
    const {message} = this.state;
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Heroku App</Text>
          <View>
            <FlatList
              data={messages}
              ItemSeparatorComponent={this._renderSeparator}
              renderItem={this._renderItem}
            />
          </View>
          <View style={{flex:1, flexDirection:'row', marginTop:40}}>
            <TextInput
              style={{ flex:1,height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal:10}}
              onChangeText={(message) => this.setState({message})}
              value={message}
            />
            <Button
                onPress={()=>{
                    this.props.deliverMsg(message, 'e177a69d-6258-44ec-a16f-4004042ba453')
                }}
                title="Send"
                color="#841584"
              />
          </View>
        </View>
    );
  }

  _renderItem = ({item}: any) => (
    <MessageList
      message={item.message}
      isDeliverd={item.isDeliverd}
    />
  );

  _renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };
}

const mapStateToProps = (state: any) => {
  return ({
    messages: state.messages
  });
};

const mapDispatchToProps = (dispatch: any) => ({
  deliverMsg: (messages: string, localId: string) => dispatch(getSendDeliveryAction(messages, localId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryItems);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
