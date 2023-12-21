import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {appColors} from '../../constants/color';
import {styles} from '../view/RadioGroup';
interface CustomRadioButtonProps {
  onPress: () => void;
  label: string;
  checked?: boolean;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  label,
  checked,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.radioButton}>
        <View style={styles.radioCircle}>
          {checked && <View style={styles.innerCircle} />}
        </View>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomRadioButton;
