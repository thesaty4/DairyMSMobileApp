import {Card, Title, Paragraph} from 'react-native-paper';
import React from 'react';
import {View} from 'react-native';
import {images} from '../../../../assets/images/all-images';
import {profileStyle} from './Profile';

export default function CustomerCard() {
  return (
    <View style={[profileStyle.wrapper, profileStyle.card]}>
      <View style={profileStyle.left}>
        <Card.Cover
          style={[profileStyle.leftImage, {width: '90%'}]}
          source={images.customer}></Card.Cover>
      </View>
      <View style={profileStyle.right}>
        <Card.Content>
          <Title>Customers Details</Title>
          <Paragraph>
            Check all customer list who is associated with you !
          </Paragraph>
        </Card.Content>
      </View>
    </View>
  );
}
