import { StyleSheet } from 'react-native';
import { Color, Font } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  separator: {
    marginTop: 10
  },
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    borderRadius: 5,
    marginHorizontal: 10,
    shadowColor: Color.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 0.9,
    elevation: 2
  },
  userImage: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    borderRadius: 25,
  },
  itemSubContainer: {
    backgroundColor: Color.primary,
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  itemUserInfoContainer: {
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteBoldText: {
    color: Color.white,
    fontWeight: Font.weight.bold,
    fontSize: Font.size.regular,
    textAlign: 'center'
  }
});
