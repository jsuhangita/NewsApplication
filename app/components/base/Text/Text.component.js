import React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText, StyleSheet } from 'react-native';
import {
  FONT_SIZE_EXTRA_SMALL,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_NORMAL, FONT_SIZE_SEMI_LARGE,
  FONT_SIZE_SMALL, FONT_WEIGHT_BOLD,
  FONT_WEIGHT_EXTRA_BOLD, FONT_WEIGHT_SEMI_BOLD,
} from '../../../styles/common.style';
import {theme} from "../../../styles/core.style";

const Text = (props) => {
  const {
    secondary,
    center,
    extraSmall,
    small,
    medium,
    large,
    bold,
    extraBold,
    semiLarge,

    spacer,

    children,
    color,
    semiBold,
    style,

    ...others
  } = props;
  return (
    <RNText
      {...others}
      style={[
        styles.text,
        center && styles.center,
        extraSmall && styles.extraSmall,
        small && styles.small,
        medium && styles.medium,
        semiLarge&&styles.semiLarge,
        large && styles.large,
        bold && styles.bold,
        semiBold&&styles.semiBold,
        extraBold && styles.extraBold,
        { color: color || (secondary ? theme.BLACK : theme.PRIMARY) },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

Text.propTypes = {
  secondary: PropTypes.bool,
  center: PropTypes.bool,
  extraSmall: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  bold: PropTypes.bool,
  semiBold:PropTypes.bool,
  extraBold: PropTypes.bool,
  semiLarge:PropTypes.bool,

  spacer: PropTypes.number,

  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  color: PropTypes.string,

  style: PropTypes.any,
};

Text.defaultProps = {
  secondary: false,
  center: false,
  extraSmall: false,
  small: false,
  medium: false,
  semiLarge:false,
  large: false,
  semiBold:false,
  bold: false,
  extraBold: false,

  spacer: 0,

  children: '',
  color: null,

  style: {},
};

const styles = StyleSheet.create({
  text: {
    ...FONT_SIZE_NORMAL,
  },

  center: {
    textAlign: 'center',
  },

  extraSmall: {
    ...FONT_SIZE_EXTRA_SMALL,
  },

  small: {
    ...FONT_SIZE_SMALL,
  },

  medium: {
    ...FONT_SIZE_MEDIUM,
  },

  semiLarge:{
    ...FONT_SIZE_SEMI_LARGE
  },

  large: {
    ...FONT_SIZE_LARGE,
  },

  semiBold:{
    ...FONT_WEIGHT_SEMI_BOLD
  },

  bold: {
    ...FONT_WEIGHT_BOLD,
  },

  extraBold: {
    ...FONT_WEIGHT_EXTRA_BOLD,
  },
});

export default Text;
