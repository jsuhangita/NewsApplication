import React,{Component} from 'react';
import {Container, Header, Icon} from "../components/base";
import {View} from 'react-native';
import {getData} from "../requests/Test.request";


export default class TestScreen extends Component{

  async componentDidMount() {
     const data = await getData();
     console.log(data);

  }

  render() {
    const { navigation } = this.props;
    const headerProps={
      leftComponent:{
        icon:'bars',
        onPress:navigation.openDrawer
      },
      centerComponent:{
        text:navigation.state.routeName
      },
      rightComponent:{
        icon:'search',
      }
    }
    return (
      <Container>
        <Header{...headerProps}/>
      </Container>
    );
  }
}
