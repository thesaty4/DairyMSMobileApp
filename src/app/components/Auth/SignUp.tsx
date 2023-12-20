import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {loginStyle} from './Login';
import CustomInput from '../../../shared/components/form/CustomInput';
import CustomButton from '../../../shared/components/form/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {router} from '../../../shared/routes/router';
import {ScrollView} from 'react-native-gesture-handler';

const defaultForm = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  ConfirmPass: '',
  firstNameError: null,
  lastNameError: null,
  emailError: null,
  passwordError: null,
  ConfirmPassError: null,
};

function SignUp() {
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
        <View style={signUpStyle.topSection}>
          <View style={loginStyle.logoContainer}>
            <Image
              source={require('../../../../assets/images/logo.png')}
              style={loginStyle.logoImage}></Image>
          </View>
          <Text style={loginStyle.loginText}>Sign Up</Text>
        </View>
        <ScrollView style={signUpStyle.bottomSection}>
          <CustomInput
            label="First Name *"
            value={useForm.firstName}
            onChangeText={text => setForm({...useForm, firstName: text})}
            placeholder="Enter your first name"
            errorMessage={useForm.emailError}
            errorType="email"
          />
          <CustomInput
            label="Last Name"
            value={useForm.lastName}
            onChangeText={text => setForm({...useForm, lastName: text})}
            placeholder="Enter your last Name"
            errorMessage={useForm.passwordError}
            errorType="required"
          />
          <CustomInput
            label="Password *"
            value={useForm.password}
            onChangeText={text => setForm({...useForm, password: text})}
            placeholder="Enter your password"
            errorMessage={useForm.passwordError}
            errorType="required"
          />
          <CustomInput
            label="Confirm Password *"
            value={useForm.ConfirmPass}
            onChangeText={text => setForm({...useForm, ConfirmPass: text})}
            placeholder="Enter your confirm password"
            errorMessage={useForm.passwordError}
            errorType="required"
          />
        </ScrollView>
        <View style={signUpStyle.action}>
          <CustomButton
            buttonStyle={loginStyle.btn}
            title="Sign Up"
            onPress={handleForm}></CustomButton>
          <CustomButton
            buttonStyle={loginStyle.btn}
            title="Back To Login"
            outline={true}
            onPress={() => {
              useRouter.navigate(router.login.route as never);
            }}></CustomButton>
        </View>
      </View>
    </View>
  );
}

export default SignUp;

const signUpStyle = StyleSheet.create({
  topSection: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
  },
  bottomSection: {
    marginTop: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    margin: 40,
    padding: 40,
    paddingBottom: 0,
    borderRadius: 10,
  },
  action: {
    ...loginStyle.action,
    paddingTop: 0,
    paddingBottom: 10,
    padding: 49,
  },
});
