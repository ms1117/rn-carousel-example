import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import { Color } from '../../themes';

export const Header = ({ title, onBack }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.whiteBoldText} numberOfLines={1}>
        {title}
      </Text>
      <TouchableOpacity style={styles.backContainer} onPress={onBack}>
        <MaterialIcons name="arrow-back" size={25} color={Color.white}/>
      </TouchableOpacity>
    </View>
  );
}