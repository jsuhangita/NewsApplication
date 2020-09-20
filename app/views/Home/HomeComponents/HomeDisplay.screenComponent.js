import React,{Component} from 'react';
import { ScrollView } from 'react-native';
import {Container} from "../../../components/base";
import NewsBannerComponent from "./NewsBanner.component";
import NewsListComponent from "./NewsList.component";


export default class HomeDisplayScreenComponent  extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Container>
        <ScrollView>
          <NewsBannerComponent/>
          <NewsListComponent/>
          <NewsListComponent category={'technology'}/>
          <NewsListComponent category={'health'}/>
        </ScrollView>
      </Container>
    )
  }
}


HomeDisplayScreenComponent.propTypes = {

};

HomeDisplayScreenComponent.defaultProps = {

};
