import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import {
  Container, Icon, Touchable,Text
} from '../base';
import { theme } from '../../styles/core.style';
import { FONT_SIZE_NORMAL } from '../../styles/common.style';
import DefaultSkeleton from '../Skeleton/DefaultSkeleton.component';
import { viewportWidth } from '../../utils/device.util';
import { getUrlHostname, youtubeIdParser } from '../../utils/helper.util';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.WHITE, flex: 1,
  },
  container: {
    paddingHorizontal: theme.PADDING_SMALL,
    flex: 1,
  },
  title: {
    ...FONT_SIZE_NORMAL,
    textAlign: 'center',
  },
  content: {
    ...FONT_SIZE_NORMAL,
    color: theme.WHITE,
  },
  skeletonContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.WHITE,
  },
  leftHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
  },
  iconLeftContainer: {
    flex: 1,
  },
  bottomIconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: viewportWidth,
    height: (Platform.OS === 'ios' ? 44 : 56),
    backgroundColor: theme.WHITE,
    flexDirection: 'row',
    paddingHorizontal: theme.PADDING,
  },
  rightHeaderContainer: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default class Browser extends Component {
  constructor(props) {
    super(props);
    const { targetUrl } = props;
    this.state = {
      webLoading: true,
      targetUrl,
      isYoutube: false,
    };
    this._onLoadEnd = this._onLoadEnd.bind(this);
    this._onPressBack = this._onPressBack.bind(this);
    this._onPressNext = this._onPressNext.bind(this);
    this._onPressRefresh = this._onPressRefresh.bind(this);
  }

  componentDidMount() {
    const { targetUrl } = this.props;
    const hostname = getUrlHostname(targetUrl);
    const videoId = youtubeIdParser(targetUrl);
    if (hostname === 'www.youtube.com') {
      this.setState({
        targetUrl: `https://www.youtube.com/embed/${videoId}`,
        isYoutube: true,
      });
    }
  }

  _onLoadEnd() {
    this.setState({
      webLoading: false,
    });
  }

  _onPressBack() {
    this.webview.goBack();
  }

  _onPressNext() {
    this.webview.goForward();
  }

  _onPressRefresh() {
    this.webview.reload();
  }

  render() {
    const { onClose } = this.props;
    const {
      webLoading,
      isYoutube,
      targetUrl='',
    } = this.state;

    return (
      <SafeAreaView style={styles.safeArea}>
        <Container>
          <View style={styles.header}>
            <View style={{ flex: 1 }}>
              <View style={styles.leftHeaderContainer}>
                <Touchable onPress={onClose} style={styles.iconLeftContainer}>
                  <Icon name="close" size={20} />
                </Touchable>
              </View>
            </View>
            <View style={{ flex: 4 }}>
              <View style={styles.rightHeaderContainer}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
                  {targetUrl}
                </Text>
              </View>
            </View>
            <View style={{ flex: 1 }} />
          </View>
          <WebView
            useWebKit
            startInLoadingState
            ref={(r) => { this.webview = r; }}
            source={{ uri: targetUrl }}
            javaScriptEnabled
            onLoadEnd={this._onLoadEnd}
            userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
          />
          {
                        webLoading
                          ? (
                            <View style={styles.skeletonContainer}>
                              <DefaultSkeleton />
                            </View>
                          )
                          : null
                    }
          {
                    !isYoutube
                      ? (
                        <View style={styles.header}>
                          <View style={styles.leftHeaderContainer}>
                            <Touchable onPress={this._onPressBack} style={styles.bottomIconContainer}>
                              <Icon name="chevron-left" size={20} />
                            </Touchable>
                            <Touchable onPress={this._onPressNext} style={styles.bottomIconContainer}>
                              <Icon name="chevron-right" size={20} />
                            </Touchable>
                            <Touchable onPress={this._onPressRefresh} style={styles.bottomIconContainer}>
                              <Icon name="refresh" size={20} />
                            </Touchable>
                          </View>
                        </View>
                      ) : null
                }

        </Container>
      </SafeAreaView>
    );
  }
}


Browser.propTypes = {
  targetUrl: PropTypes.string,
  onClose: PropTypes.func,
};

Browser.defaultProps = {
  targetUrl: '',
  onClose: noop,
};
