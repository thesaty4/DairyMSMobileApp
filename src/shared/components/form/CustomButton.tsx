// CustomButton.tsx

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {appColors} from '../../constants/color';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  standard?: boolean;
  outline?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  buttonStyle,
  textStyle,
  outline,
  standard,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        outline ? styles.outlineButton : null,
        buttonStyle,
        standard && {borderRadius: 0},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          outline ? styles.outlineButtonText : null,
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: appColors.primary,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: appColors.primary,
    backgroundColor: 'transparent',
  },
  outlineButtonText: {
    color: appColors.primary,
  },
});

export default CustomButton;
