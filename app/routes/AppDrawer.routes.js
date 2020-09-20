import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeRoutes from './Home.routes'


export default createDrawerNavigator({
  News:{
   screen:HomeRoutes
  }
})
