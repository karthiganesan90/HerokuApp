import { AppRegistry } from 'react-native';
import { DeliveryMessages } from './views';
export default DeliveryMessages;
AppRegistry.registerComponent('HerokuApp', () => DeliveryMessages);

/* Remove yellow box from rendering during demos */
console.disableYellowBox = true;
