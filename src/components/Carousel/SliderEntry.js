import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import _ from 'lodash';
import styles from './SliderEntry.style';

export default class SliderEntry extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

  get image () {
    const { data } = this.props;

    return (
      <Image
        source={{ uri: _.get(data, 'urls.regular', '')}}
        style={styles.image}
      />
    );
  }

  render () {
    return (
      <View
        activeOpacity={1}
        style={styles.slideInnerContainer}
      >
        <View style={styles.shadow} />
        <View style={styles.imageContainer}>
          { this.image }
          <View style={styles.radiusMask} />
        </View>
      </View>
    );
  }
}
