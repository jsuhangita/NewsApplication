import createNativeStackNavigator from 'react-native-screens/createNativeStackNavigator';
import HomeScreen from "../views/Home/Home.page";
import NewsDetailPage from "../views/Home/NewsDetail.page";
import SearchNewsPage from "../views/Home/SearchNews.page";

export default createNativeStackNavigator({
  Home:HomeScreen,
  NewsDetailScreen:NewsDetailPage,
  SearchNewsScreen:SearchNewsPage,
}, {
  headerMode: 'none',
});
