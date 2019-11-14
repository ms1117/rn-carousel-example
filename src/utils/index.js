import { Alert } from 'react-native';

export const showAlert = (message = '', onPress = () => console.log('OK Pressed')) => {
  Alert.alert('Unsplash', message,
    [
      { text: 'OK', onPress },
    ],
    { cancelable: false }
  );
}
