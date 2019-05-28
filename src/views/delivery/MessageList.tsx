import React from "react";
import { StyleSheet, View,Text } from "react-native";

interface MessageListProps {
    message: string;
    isDeliverd: boolean;
}

/**
 * 
 * Display message and delivery status
 */
export class MessageList extends React.PureComponent<MessageListProps> {

    render(){
        const { message, isDeliverd } = this.props;
        console.log('isDeliverd',isDeliverd);
        return(
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
                <Text style={styles.status}>{isDeliverd? 'Sent.':'Sending...'}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#000000'
    },
    message:{
        flex:0.5,
        textAlign:'left',
        color:'#ffffff',
        fontSize: 15,
        paddingLeft: 5
    },
    status:{
        flex:0.5,
        color:'#ffffff',
        fontSize: 10,
        textAlign:'right',
        paddingRight: 5
    }
});
  