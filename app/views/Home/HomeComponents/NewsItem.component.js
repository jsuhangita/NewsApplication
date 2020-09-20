import React, {Component} from 'react';
import { View,StyleSheet } from 'react-native';
import {Image, Text, Touchable} from "../../../components/base";
import {theme} from "../../../styles/core.style";
import moment from "moment";
import { withNavigation } from 'react-navigation';
import {isNull} from "lodash";



class NewsItemComponent extends Component {
  constructor(props) {
    super(props);
    this._onPressItem = this._onPressItem.bind(this);
  }

  _onPressItem(){
    const { url,navigation } = this.props;
    navigation.navigate('NewsDetailScreen',{url})
  }

  render() {
    const { title,publishedAt,urlToImage='' } = this.props;
    const dateObj = moment(publishedAt,'YYYY-MM-DDThh:mm:ss');
    return (
      <View>
        <Touchable onPress={this._onPressItem}>
          <View style={styles.contentContainer}>
            <View style={{flex:2}}>
              <Text style={styles.title} semiBold numberOfLines={3} ellipsizMode={3} medium color={theme.BLACK}>{title}</Text>
              <Text style={styles.agoText}>{dateObj.fromNow()}</Text>
            </View>
            <View style={{flex:1}}>
              <Image style={styles.image} source={{uri:isNull(urlToImage)?'':urlToImage}}/>
            </View>
          </View>
        </Touchable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer:{
    flexDirection:'row',
    padding:theme.PADDING,
  },
  agoText:{
    marginVertical:theme.PADDING,
  },
  image:{
    flex:1,
  },
  title:{
    paddingRight:theme.PADDING
  }
})

export default withNavigation(NewsItemComponent);


NewsItemComponent.propTypes = {};

NewsItemComponent.defaultProps = {};
