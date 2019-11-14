import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const wp = (percentage) => {
  const value = (percentage * width) / 100;
  return Math.round(value);
}

const carouselSlideHeight = (height / 3) * 2;
const carouselSlideWidth = wp(75);
const carouselItemHorizontalMargin = wp(2);

export const carouselSliderWidth = width;
export const carouselItemWidth = carouselSlideWidth + carouselItemHorizontalMargin * 2;

export default {
  width,
  height,
  carouselItemHorizontalMargin,
  carouselSlideWidth,
  carouselSlideHeight,
  carouselSliderWidth,
  carouselItemWidth
}
