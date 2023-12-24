import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID', // Replace with your web client ID
  offlineAccess: true,
});

const GoogleSignIn: React.FC = () => {
  useEffect(() => {
    // Check if the user is already signed in
    const checkIfSignedIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signInSilently();
        console.log('User Info:', userInfo);
      } catch (error) {
        console.error('Error checking sign-in status:', error);
      }
    };

    checkIfSignedIn();
  }, []);

  const handleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the sign-in process');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign-in is already in progress');
      } else {
        console.error('Error signing in:', error);
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View>
      <Text>Google Sign-In Example</Text>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleSignIn}
      />
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default GoogleSignIn;
