import { StyleSheet } from 'react-native';
import { Color, Font, Metric } from '../../themes';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 10
  },
  userImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 5,
    marginLeft: 5
  },
  userInfoContainer: {
    flexDirection: 'row'
  },
  userSubInfoContainer: {
    marginLeft: 20,
    justifyContent: 'center'
  },
  whiteBoldText: {
    color: Color.white,
    fontSize: Font.size.regular,
    fontWeight: Font.weight.bold
  },
  whiteBigBoldText: {
    color: Color.white,
    fontSize: Font.size.large,
    fontWeight: Font.weight.bold,
    marginLeft: 5
  },
  whiteText: {
    color: Color.white,
    fontSize: Font.size.medium,
  },
  separator: {
    height: 5,
  },
  userImageItem: {
    width: (Metric.width - 30) / 2,
    height: (Metric.width - 30) / 2,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  userImageContainer: {
    marginHorizontal: 5,
  },
  userImagesContainer: {
    marginTop: 20,
    flex: 1
  },
  imagesList: {
    marginTop: 10,
    flex: 1
  },
  slider: {
    marginTop: 15,
  },
  sliderContentContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.backgroundColor
  },
  carouselCloseContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  carouselHeader: {
    alignItems: 'flex-end',
  }
});
