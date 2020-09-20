import { enableScreens } from 'react-native-screens';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoadingScreen from '../views/LoadingScreen.page';
import AppDrawer from './AppDrawer.routes'

enableScreens();

const AppNavigator = createSwitchNavigator({
  LoadingScreen,
  App:AppDrawer,
}, {
  initialRouteName: 'LoadingScreen',
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
