import { createAppContainer,  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SearchUserScreen, UserDetailScreen } from './screens';

const AppNavigator = createStackNavigator({
  SearchUserScreen: {
    screen: SearchUserScreen,
  },
  UserDetailScreen: {
    screen: UserDetailScreen
  }
}, {
  initialRouteName: 'SearchUserScreen',
  headerMode: 'none'
});

export default createAppContainer(AppNavigator);
