import {Card, Title, Paragraph} from 'react-native-paper';
import React from 'react';
import {View} from 'react-native';
import {images} from '../../../../assets/images/all-images';
import {profileStyle} from './Profile';

export default function History() {
  return (
    <View style={[profileStyle.wrapper, profileStyle.card]}>
      <View style={profileStyle.left}>
        <Card.Cover
          style={[profileStyle.leftImage, {width: '90%'}]}
          source={images.history}></Card.Cover>
      </View>
      <View style={profileStyle.right}>
        <Card.Content>
          <Title>Check Your History</Title>
          <Paragraph>Track your history instantly !</Paragraph>
        </Card.Content>
      </View>
    </View>
  );
}
