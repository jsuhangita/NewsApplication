import React, {Component} from 'react';
import { StyleSheet,View } from 'react-native';
import {Container, Text} from "../../../components/base";
import {theme} from "../../../styles/core.style";

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
  }

  render() {
    return (
      <Container>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <View style={styles.bar}/>
            <Text style={styles.title} large bold color={theme.BLACK}>TOP NEWS</Text>
          </View>
          <Text medium bold>See all</Text>
        </View>
        {}
      </Container>
    )
  }
}


NewsListComponent.propTypes = {};

NewsListComponent.defaultProps = {};
