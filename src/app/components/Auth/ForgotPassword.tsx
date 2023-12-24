import React, {useState} from 'react';
import {defaultForm, loginStyle} from './Login';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';
import CustomInput from '../../../shared/components/form/CustomInput';
import CustomButton from '../../../shared/components/form/CustomButton';
import {router} from '../../../shared/routes/router';

function ForgotPassword() {
  const [useForm, setForm] = useState({...defaultForm});
  const useRouter = useNavigation();

  const handleForm = () => {
    console.log(useForm);
  };

  return (
    <View style={loginStyle.main}>
      <Image
        source={require('../../../../assets/images/background.png')}
        style={loginStyle.bgImage}
      />
      <View style={loginStyle.formWrapper}>
        <View style={loginStyle.topSection}>
          <View style={loginStyle.logoContainer}>
            <Image
              source={require('../../../../assets/images/logo.png')}
              style={loginStyle.logoImage}></Image>
          </View>
          <Text style={loginStyle.loginText}>Forgot Password</Text>
        </View>
        <View style={loginStyle.bottomSection}>
          <CustomInput
            label="Email"
            value={useForm.email}
            onChangeText={text => setForm({...useForm, email: text})}
            placeholder="Enter your email"
            errorMessage={useForm.emailError}
            errorType="email"
          />
          <View>
            <CustomButton title="Send Link" onPress={handleForm}></CustomButton>
            <CustomButton
              title="Back To Login"
              outline={true}
              onPress={() => {
                useRouter.navigate(router.login.route as never);
              }}></CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ForgotPassword;
