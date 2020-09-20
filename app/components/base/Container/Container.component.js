import React from 'react';
import PropTypes from 'prop-types';
import {
  View, ViewPropTypes, StyleSheet,
} from 'react-native';
import { theme } from '../../../styles/core.style';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:theme.WHITE,
  },
  container: {
    flex: 1,
    backgroundColor:theme.WHITE,
  },
});

export default function Container(props) {
  const {
    children,
  } = props;
  return (
    <View style={[styles.safeArea]}>
      <View style={[styles.container]}>
        {children}
      </View>
    </View>
  );
}


Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};
Container.defaultProps = {
  style: {},
};
