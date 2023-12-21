import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {appColors} from '../../constants/color';
import {styles as inputStyles} from '../../../shared/components/form/CustomInput';

export interface RadioItem {
  key: string;
  value: any;
  label: string;
}

interface RadioGroupProps {
  label?: string;
  flat?: boolean;
  items: RadioItem[];
  onSelect: (value: any) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  flat,
  items,
  onSelect,
}) => {
  const [selectedValue, setSelectedValue] = useState<any>(
    items.length > 0 ? items[0].value : null,
  );

  useEffect(() => {
    onSelect(selectedValue);
  }, []);

  const handleRadioPress = (value: any) => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <>
      {label && <Text style={[inputStyles.label, styles.label]}>{label}</Text>}
      <View
        style={[
          styles.mainWrapper,
          flat && {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        {items.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.key}
              onPress={() => handleRadioPress(item.value)}
              style={[styles.radioButton]}>
              <View style={styles.radioCircle}>
                {selectedValue === item.value && (
                  <View style={styles.innerCircle} />
                )}
              </View>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  mainWrapper: {
    ...inputStyles.container,
  },
  label: {},
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: appColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: appColors.primary,
  },
});

export default RadioGroup;
