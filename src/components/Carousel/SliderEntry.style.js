import { StyleSheet, Platform } from 'react-native';
import { Metric, Color } from '../../themes';

const IS_IOS = Platform.OS === 'ios';
const entryBorderRadius = 0;

export default StyleSheet.create({
  slideInnerContainer: {
    width: Metric.carouselItemWidth,
    height: Metric.carouselSlideHeight,
    paddingHorizontal: Metric.carouselItemHorizontalMargin,
    paddingBottom: 18 // needed for shadow
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: Metric.carouselItemHorizontalMargin,
    right: Metric.carouselItemHorizontalMargin,
    bottom: 18,
    shadowColor: Color.shadowColor,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    borderRadius: entryBorderRadius
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
    // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'white'
  },
});
