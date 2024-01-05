import {Card, Title, Paragraph} from 'react-native-paper';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {images} from '../../../../assets/images/all-images';
import CustomButton from '../../../shared/components/form/CustomButton';

export default function Profile({type}: any) {
  return (
    <View style={[profileStyle.wrapper, profileStyle.card, {height: 130}]}>
      <View style={profileStyle.left}>
        <Card.Cover
          style={profileStyle.leftImage}
          source={images.userImg}></Card.Cover>
      </View>
      <View style={profileStyle.right}>
        <Card.Content>
          <Title>Mr. Jhon Deo</Title>
          <Paragraph>{type} | email@gmail.com</Paragraph>
          <CustomButton
            title="Edit Profile"
            onPress={() => {}}
            standard={true}></CustomButton>
        </Card.Content>
      </View>
    </View>
  );
}

export const profileStyle = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    padding: 10,
  },
  left: {
    width: '30%',
    borderRadius: 0,
  },
  leftImage: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
  },
  right: {width: '70%'},
  card: {
    borderWidth: 0.1,
    elevation: 0.5,
  },
});
