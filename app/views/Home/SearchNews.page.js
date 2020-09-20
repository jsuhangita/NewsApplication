import React, {Component} from 'react';
import { View,StyleSheet } from 'react-native';
import {Container, Text, Touchable} from "../../components/base";
import {Header, Input} from "../../components/base";
import {theme} from "../../styles/core.style";
import {connect} from "react-redux";
import {searchNews} from "../../thunks/Home.thunks";
import SearchNewsListComponent from "./HomeComponents/SearchNewsList.component";


class SearchNewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        value: {},
        error: {},
      },
    };
    this._handleFormChange = this._handleFormChange.bind(this);
    this._onPressCancel = this._onPressCancel.bind(this);
  }

  _onPressCancel(){
    const { navigation } = this.props;
    navigation.goBack();
  }

  _handleFormChange(event) {
    const { value, name } = event;
    const { handleGetSearchData } = this.props;
    this.setState((prevState) => ({
      form: {
        value: {
          ...prevState.form.value,
          [name]: value,
        },
        error: {
          ...prevState.form.error,
          [name]: '',
        },
      },
    }));
    if(name==='query'){
      handleGetSearchData({query:value})
    }
  }

  render() {
    const { form } = this.state;
    const headerProps= {
      centerComponent:(
        <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
          <View style={{flex:1}}>
            <Input
              wrapperStyle={styles.searchWrapper}
              style={styles.search}
              containerStyle={styles.searchContainer}
              iconAffix={'search'}
              placeholder={'Search...'}
              small
              onChangeText={this._handleFormChange}
              name="query"
              value={form.value.query || ''}
              error={form.error.query || ''}
            />
          </View>
            <Touchable onPress={this._onPressCancel}>
              <Text style={styles.cancelText} medium>
                Cancel
              </Text>
            </Touchable>
        </View>
      ),
    }
    return (
      <Container>
        <Header {...headerProps}/>
        <SearchNewsListComponent/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  searchWrapper:{
    marginTop: theme.PADDING*2,
  },
  searchContainer:{
    borderRadius:5,
    borderWidth:0,
    backgroundColor:theme.FADE_GREY,
  },
  search:{
    height:30,
  },
  cancelText:{
    padding:theme.PADDING,
  }
})

function mapDispatchToProps(dispatch) {
  return {
    handleGetSearchData: (payload) => dispatch(searchNews(payload)),
  };
}

export default connect(null, mapDispatchToProps)(SearchNewsPage);


SearchNewsPage.propTypes = {};

SearchNewsPage.defaultProps = {};
