import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from "../views/Home/Home.page";


export default createDrawerNavigator({
  News:{
   screen:HomeScreen
  }
})
