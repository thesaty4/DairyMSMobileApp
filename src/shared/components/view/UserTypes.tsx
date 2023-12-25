import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {RadioItem, styles} from './RadioGroup';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import {appColors} from '../../constants/color';

export interface UserTypesProps {
  userTypes: RadioItem[];
  onSelect: (item: UserType) => void;
}

function UserTypes({onSelect, userTypes}: UserTypesProps) {
  const [selectedValue, setSelectedValue] = useState<UserType>(
    userTypes.length > 0 ? userTypes[0].value : null,
  );

  useEffect(() => {
    onSelect(selectedValue);
  }, []);

  const handleRadioPress = (value: UserType) => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <>
      <View
        style={[
          styles.mainWrapper,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        {userTypes.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.key}
              onPress={() => handleRadioPress(item.value)}
              style={[userTypeStyle.radioButton]}>
              <View
                style={[
                  userTypeStyle.radioCircle,
                  selectedValue === item.value && {elevation: 5},
                ]}>
                {item?.imgPath && (
                  <Image
                    source={item.imgPath as any}
                    style={userTypeStyle.icons}></Image>
                )}
                {selectedValue === item.value && (
                  <View style={userTypeStyle.innerCircle} />
                )}
              </View>
              <Text style={{textAlign: 'center'}}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}

export default UserTypes;

export const userTypeStyle = StyleSheet.create({
  icons: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  innerCircle: {
    position: 'absolute',
    backgroundColor: appColors.black,
    opacity: 0.4,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  radioButton: {
    alignItems: 'center',
  },
  radioCircle: {
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: appColors.primary,
  },
});

export enum UserType {
  customer = 'customer',
  rider = 'rider',
  supplier = 'supplier',
}
