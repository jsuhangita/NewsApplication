import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeRoutes from './Home.routes'
import {theme} from "../styles/core.style";
import {CustomDrawerContentComponent} from "./CustomDrawer.component";
import {generatedIcon} from "./CustomDrawerIcon.component";
import TestScreen from "../views/TestScreen";


export default createDrawerNavigator({
  News:{
   screen:HomeRoutes,
    navigationOptions:()=>({
     drawerIcon:generatedIcon('home', 'home', 25)
    })
  },
  Videos:{
    screen:TestScreen,
    navigationOptions:()=>({
      drawerIcon:generatedIcon('youtube', 'youtube', 25)
    })
  },
  MyEbooks:{
    screen:TestScreen,
    navigationOptions:()=>({
      drawerIcon:generatedIcon('book', 'book', 25),
      title:'My Ebooks'
    })
  },
  BuyEbooks:{
    screen:TestScreen,
    navigationOptions:()=>({
      drawerIcon:generatedIcon('book-reader', 'book-reader', 25,'FontAwesome5'),
      title:'Buy Ebooks'
    })
  },
  Shops:{
    screen:TestScreen,
    navigationOptions:()=>({
      drawerIcon:generatedIcon('shopping-cart', 'shopping-cart', 25)
    })
  },
  Rewards:{
    screen:TestScreen,
    navigationOptions:()=>({
      drawerIcon:generatedIcon('gift', 'gift', 25,'FontAwesome5')
    })
  },
  Subscription:{
    screen:TestScreen,
    navigationOptions:()=>({
      drawerIcon:generatedIcon('wallet', 'wallet', 25,'FontAwesome5')
    })
  },
  Account:{
    screen:TestScreen,
    navigationOptions:()=>({
      drawerIcon:generatedIcon('user', 'user', 25,'FontAwesome5')
    })
  },
  Advertise:{
    screen:TestScreen,
    navigationOptions:()=>({
      drawerIcon:generatedIcon('bullhorn', 'bullhorn', 25,'FontAwesome5')
    })
  },
  Settings:{
    screen:TestScreen,
    navigationOptions:()=>({
      drawerIcon:generatedIcon('cog', 'cog', 25)
    })
  },
  Logout:{
    screen:TestScreen,
    navigationOptions:()=>({
      drawerIcon:generatedIcon('home', 'home', 25)
    })
  },
},{
  contentComponent:CustomDrawerContentComponent,
  contentOptions:{
    activeTintColor:theme.PRIMARY,
    activeBackgroundColor:theme.TRANSPARENT,
    inactiveTintColor:theme.GREY,
  }
})
