// CustomButton.tsx

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  outline?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  buttonStyle,
  textStyle,
  outline,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        outline ? styles.outlineButton : null,
        buttonStyle,
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
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#3498db',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: '#3498db',
    backgroundColor: 'transparent',
  },
  outlineButtonText: {
    color: '#3498db',
  },
});

export default CustomButton;
