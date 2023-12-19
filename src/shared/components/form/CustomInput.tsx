import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {appColors} from '../../constants/color';

interface CustomInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  errorType?: 'required' | 'email' | 'optional'; // Add more error types as needed
  style?: StyleProp<ViewStyle>;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  errorType,
  style,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleValidation = () => {
    // You can implement various types of error checks here based on your requirements
    switch (errorType) {
      case 'required':
        if (!value) {
          setError('This field is required.');
        } else {
          setError(null);
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setError('Please enter a valid email address.');
        } else {
          setError(null);
        }
        break;
      default:
        setError(null);
        break;
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error ? styles.errorInput : {}]}
        value={value}
        onChangeText={text => {
          onChangeText(text);
          setError(null);
        }}
        onBlur={handleValidation}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    height: 40,
    borderColor: appColors.primary,
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 5,
    fontSize: 12,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
});

export default CustomInput;
