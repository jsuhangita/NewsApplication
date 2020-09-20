import React,{ Component } from 'react';
import { Dimensions } from 'react-native';
import {Container, Header} from "../../components/base";
import {TabBar, TabView} from "react-native-tab-view";
import {FONT_SIZE_NORMAL,FONT_WEIGHT_BOLD} from "../../styles/common.style";
import {theme} from "../../styles/core.style";
import HomeDisplayScreenComponent from "./HomeComponents/HomeDisplay.screenComponent";


const initialLayout = { width: Dimensions.get('window').width };

export default class HomeScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      index: 0, // eslint-disable-line
      routes: [ // eslint-disable-line
        { key: 'today', title: 'Today' },
        { key: 'trending', title: 'Trending' },
        { key: 'shop', title: 'Shop' },
      ],
    };
    this._renderTabBar = this._renderTabBar.bind(this);
    this._onIndexChange = this._onIndexChange.bind(this);
  }

  _renderScene({ route }) {
    switch (route.key) {
      case 'today':{
        return(
          <HomeDisplayScreenComponent/>
        )
      }
      case 'trending':{
        return(
          <HomeDisplayScreenComponent/>
        )
      }
      case 'shop':{
        return(
          <HomeDisplayScreenComponent/>
        )
      }
      default:
        return null;
    }
  }

  _renderTabBar(props) {
    return (
      <TabBar
        {...props}
        labelStyle={{ ...FONT_SIZE_NORMAL, ...FONT_WEIGHT_BOLD, color: theme.PRIMARY }}
        indicatorStyle={{ backgroundColor: theme.PRIMARY }}
        style={{ backgroundColor: theme.LIGHT_GREY }}
      />
    );
  }

  _onIndexChange(index) {
    this.setState({ index });
  }

  render() {
    const { navigation } = this.props;
    const headerProps={
      leftComponent:{
        icon:'bars',
        onPress:navigation.openDrawer
      },
      centerComponent:{
        text:'NEWS_LOGO'
      },
      rightComponent:{
        icon:'search',
      }
    }
    const { index, routes, loading } = this.state;
    return (
      <Container>
        <Header{...headerProps}/>
        <TabView
          lazy
          renderTabBar={this._renderTabBar}
          navigationState={{ index, routes }}
          renderScene={this._renderScene}
          onIndexChange={this._onIndexChange}
          initialLayout={initialLayout}
        />
      </Container>
    );
  }
}
