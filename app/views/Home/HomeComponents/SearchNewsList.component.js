import React, {Component} from 'react';
import {Container, Text} from "../../../components/base";
import { FlatList } from "react-native";
import {connect} from "react-redux";
import NewsItemComponent from "./NewsItem.component";



class SearchNewsListComponent extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem({item}){
    return(
      <NewsItemComponent
        {...item}
      />
    )
  }

  _keyExtractor(item, index) {
    return String(index);
  }

  render() {
    const { searchResult } = this.props
    const { data } = searchResult;
    return (
      <Container>
        <FlatList
          data={data.articles}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </Container>
    )
  }
}

function mapStateToProps(state,) {
  return {
    searchResult: state.searchResult,
  };
}

export default connect(mapStateToProps,null)(SearchNewsListComponent);


SearchNewsListComponent.propTypes = {};

SearchNewsListComponent.defaultProps = {};
