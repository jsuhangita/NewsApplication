import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from "../components/base";

export const generatedIcon = (focusedIcon, unFocusedIcon, size = 25,iconType) => {
  const IconGenerator = (props) => {
    const { focused, tintColor } = props;
    const iconName = focused ? focusedIcon : unFocusedIcon;
    return (<Icon iconType={iconType} name={iconName} size={size} color={tintColor} />);
  };
  IconGenerator.propTypes = {
    focused: PropTypes.string.isRequired,
    tintColor: PropTypes.string.isRequired,
  };
  return IconGenerator;
};
