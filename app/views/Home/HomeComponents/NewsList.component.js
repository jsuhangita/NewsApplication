import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import {Container, Text} from "../../../components/base";
import {theme} from "../../../styles/core.style";
import { map,capitalize } from 'lodash';
import {getNews} from "../../../requests/Home.request";
import NewsItemComponent from "./NewsItem.component";

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:theme.PADDING,
  },
  bar:{
    height:40,
    width:10,
    backgroundColor:theme.PRIMARY,
  },
  titleContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  title:{
    marginLeft:theme.PADDING,
  }
})

export default class NewsListComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      articles:[],
      loading:true,
    }
    this._getData = this._getData.bind(this);
    this._renderImage = this._renderImage.bind(this);
  }

  componentDidMount() {
    this._getData()
  }

  async _getData(){
    const { category } = this.props
    const {articles} = await getNews({category});
    this.setState({
      articles,
      loading:false
    })
  }

  _renderImage(item,index){
    return(
      <NewsItemComponent
        key={index}
        {...item}
      />
    )
  }

  render() {
    const { articles } = this.state;
    const { category='TOP NEWS'  } = this.props
    return (
      <Container>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <View style={styles.bar}/>
            <Text style={styles.title} large bold color={theme.BLACK}>{capitalize(category)}</Text>
          </View>
          <Text medium bold>See all</Text>
        </View>
        { map(articles,this._renderImage) }
      </Container>
    )
  }
}


NewsListComponent.propTypes = {

};

NewsListComponent.defaultProps = {

};
