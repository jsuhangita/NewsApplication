import React, {Component} from 'react';
import {Container} from "../../components/base";
import Browser from "../../components/InAppBrowser/InAppBrowser.component";


export default class NewsDetailPage extends Component {
  constructor(props) {
    super(props);
    this._onPressClose = this._onPressClose.bind(this);
  }

  _onPressClose(){
    const { navigation } = this.props;
    navigation.navigate('Home')
  }

  render() {
    const { navigation } = this.props;
    const { url='' } = navigation.state.params;
    return (
      <Container>
        <Browser onClose={this._onPressClose} targetUrl={url}/>
      </Container>
    )
  }
}


NewsDetailPage.propTypes = {};

NewsDetailPage.defaultProps = {};
