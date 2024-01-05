// App.tsx
import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {images} from '../../../../assets/images/all-images';
import {Icons} from '../../../../assets/icons/all-icons';
import CustomButton from '../../../shared/components/form/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {router} from '../../../shared/routes/router';
import {commonStyles} from '../../../shared/constants/commonStyles';
import {appColors} from '../../../shared/constants/color';
import History from '../cards/History';
import Profile from '../cards/Profile';
import Scanner from '../cards/Scanner';
import {ScrollView} from 'react-native-gesture-handler';
import CustomerCard from '../cards/CustomerCard';

const Customer: React.FC = () => {
  const navigator: any = useNavigation();

  return (
    <View style={[{flex: 1}, usersStyles.mainWrapper]}>
      <View style={usersStyles.navbar}>
        <Image
          source={images.logo}
          style={[usersStyles.logo, usersStyles.navbarIcons]}
        />
        <View style={usersStyles.navbarActions}>
          <TouchableOpacity onPress={() => console.log('Settings pressed')}>
            <Image source={Icons.settings} style={usersStyles.navbarIcons} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Notification pressed')}>
            <Image
              source={Icons.notification}
              style={usersStyles.navbarIcons}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Profile pressed')}>
            <Image source={Icons.user} style={usersStyles.navbarIcons} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={usersStyles.content}>
          <Profile type="Customer"></Profile>
          <Scanner></Scanner>
          <CustomerCard></CustomerCard>
          <History></History>
        </View>
        <View style={usersStyles.logoutWrapper}>
          <CustomButton
            title="Logout"
            buttonStyle={usersStyles.logout}
            onPress={() =>
              navigator.navigate(router.login.route)
            }></CustomButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default Customer;

export const usersStyles = StyleSheet.create({
  mainWrapper: {},
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: appColors.primary,
  },
  logo: {
    width: '30%',
    height: 20,
  },
  navbarIcons: {
    tintColor: 'white',
  },
  navbarActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  logoutWrapper: {
    ...commonStyles.flexCenter,
    marginHorizontal: 20,
  },
  logout: {
    width: '100%',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    gap: 30,
  },
});
