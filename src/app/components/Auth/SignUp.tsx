import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {loginStyle} from './Login';
import CustomInput from '../../../shared/components/form/CustomInput';
import CustomButton from '../../../shared/components/form/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {router} from '../../../shared/routes/router';
import {ScrollView} from 'react-native-gesture-handler';
import RadioGroup, {
  RadioItem,
} from '../../../shared/components/view/RadioGroup';

export const userTypes: RadioItem[] = [
  {
    key: 'rider',
    label: 'Rider',
    value: 'rider',
  },
  {
    key: 'supplier',
    label: 'Supplier',
    value: 'supplier',
  },
];

const defaultForm = {
  email: '',
  name: '',
  password: '',
  confirmPass: '',
  userType: '',
  firstNameError: null,
  lastNameError: null,
  emailError: null,
  passwordError: null,
  confirmPassError: null,
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
          <RadioGroup
            label="User Type"
            flat={true}
            items={userTypes}
            onSelect={text => {
              setForm({...useForm, userType: text});
            }}></RadioGroup>
          <CustomInput
            label="Name *"
            value={useForm.name}
            onChangeText={text => setForm({...useForm, name: text})}
            placeholder="Enter your first name"
            errorMessage={useForm.emailError}
            errorType="email"
          />
          <CustomInput
            label="Email *"
            value={useForm.email}
            onChangeText={text => setForm({...useForm, email: text})}
            placeholder="ex - yourid@domain.com"
            errorMessage={useForm.passwordError}
            errorType="email"
            style={useForm.userType != 'rider' && {marginBottom: 70}}
          />
          {useForm.userType == 'rider' && (
            <>
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
                value={useForm.confirmPass}
                onChangeText={text => setForm({...useForm, confirmPass: text})}
                placeholder="Enter your confirm password"
                errorMessage={useForm.passwordError}
                errorType="required"
                style={{marginBottom: 70}}
              />
            </>
          )}
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

export const signUpStyle = StyleSheet.create({
  topSection: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
  },
  bottomSection: {
    margin: 40,
    padding: 40,
    marginTop: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 100,
    borderRadius: 10,
  },
  action: {
    ...loginStyle.action,
  },
});
