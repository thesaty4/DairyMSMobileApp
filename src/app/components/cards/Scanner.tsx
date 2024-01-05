import {Card, Title, Paragraph} from 'react-native-paper';
import React from 'react';
import {View} from 'react-native';
import {images} from '../../../../assets/images/all-images';
import {profileStyle} from './Profile';

export default function Scanner() {
  return (
    <View style={[profileStyle.wrapper, profileStyle.card]}>
      <View style={profileStyle.left}>
        <Card.Cover
          style={[profileStyle.leftImage]}
          source={images.barcodeScanner}></Card.Cover>
      </View>
      <View style={profileStyle.right}>
        <Card.Content>
          <Title>Click To Scan</Title>
          <Paragraph>You can track your order as well !</Paragraph>
        </Card.Content>
      </View>
    </View>
  );
}
