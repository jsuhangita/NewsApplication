import React, {Component} from 'react';
import { View,StyleSheet,ImageBackground } from "react-native";
import {theme} from "../../../styles/core.style";
import Swiper from 'react-native-swiper'
import {Image, Text} from "../../../components/base";
import {getTopHeadline} from "../../../requests/Home.request";
import { map,isNull } from 'lodash';
import {viewportWidth} from "../../../utils/device.util";
import moment from "moment";



export default class NewsBannerComponent extends Component {
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
    const {articles} = await getTopHeadline();
    this.setState({
      articles,
      loading:false
    })
  }

  _renderImage(item){
    const { urlToImage,publishedAt,title } = item;
    const dateObj = moment(publishedAt,'YYYY-MM-DDThh:mm:ss');
    return(
      <View key={publishedAt} style={styles.imageContainer}>
        <ImageBackground
          source={{uri:isNull(urlToImage)?'':urlToImage}}
          style={styles.imageContainer}
        >
          <View style={styles.contentContainer}>
            <Text color={theme.WHITE} semiLarge bold numberOfLines={2} ellipsizMode={'tail'}>
              {title}
            </Text>
            <Text color={theme.WHITE} medium spacer={10}>
              {dateObj.format('dddd, MMMM DD, YYYY, hh:mm')}
            </Text>
          </View>
        </ImageBackground>
      </View>
    )
  }


  render() {
    const { articles,loading } = this.state;
    if(loading){
      return(
        <View style={styles.container}>
          <View style={{flex:1,backgroundColor:theme.GREY}}/>
        </View>
        )
    }
    return (
      <View style={styles.container}>
        <Swiper
          removeClippedSubviews={false}
          activeDotColor={theme.PRIMARY}
          dotColor={theme.GREY}
        >
          {
            map(articles,this._renderImage)
          }
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:250,
    width:viewportWidth-theme.PADDING*2,
    marginVertical:theme.PADDING,
    alignSelf:'center',
  },
  imageContainer:{
    flex:1,
  },
  contentContainer:{
    marginTop:'auto',
    padding:theme.PADDING,
    paddingBottom:theme.PADDING_LARGE*2,
    backgroundColor:theme.FADE_BLACK,
  }
})

NewsBannerComponent.propTypes = {};

NewsBannerComponent.defaultProps = {};
