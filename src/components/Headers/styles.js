import { StyleSheet, Dimensions } from 'react-native';
import { Metric, Font, Color } from '../../themes';

export const styles = StyleSheet.create({
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteBoldText: {
    fontSize: Font.size.large,
    fontWeight: 'bold',
    width: (Metric.width / 3) * 2,
    textAlign: 'center',
    color: Color.white
  },
  backIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  backContainer: {
    position: 'absolute',
    left: 10,
    top: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
})