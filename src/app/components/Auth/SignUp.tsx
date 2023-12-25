import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {loginStyle} from './Login';
import CustomInput from '../../../shared/components/form/CustomInput';
import CustomButton from '../../../shared/components/form/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {router} from '../../../shared/routes/router';
import {ScrollView} from 'react-native-gesture-handler';
import RadioGroup from '../../../shared/components/view/RadioGroup';
import UserTypes, {UserType} from '../../../shared/components/view/UserTypes';
import {defaultForm, userTypes} from '../../constants/auth';

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
          <UserTypes
            userTypes={userTypes}
            onSelect={(text: UserType) => {
              setForm({...useForm, userType: text});
            }}
          />
          <CustomInput
            label="Name *"
            value={useForm.name}
            onChangeText={text => setForm({...useForm, name: text})}
            placeholder="Enter your name"
            errorMessage={useForm.firstNameError}
            errorType="required"
          />
          <RadioGroup
            label="Gender *"
            onSelect={(item: string) => {
              setForm({...useForm, gender: item});
            }}
            flat={true}
            items={[
              {key: 'male', label: 'Male', value: 'male'},
              {key: 'female', label: 'Female', value: 'female'},
              {key: 'other', label: 'Other', value: 'other'},
            ]}
          />
          <CustomInput
            label="Email *"
            value={useForm.email}
            onChangeText={text => setForm({...useForm, email: text})}
            placeholder="ex - yourid@domain.com"
            errorMessage={useForm.emailError}
            errorType="email"
          />
          {[UserType.customer, UserType.rider, UserType.supplier].includes(
            useForm.userType as any,
          ) && (
            <CustomInput
              label="Mobile *"
              value={useForm.email}
              onChangeText={text => setForm({...useForm, email: text})}
              placeholder="+91 00-000-00000"
              errorMessage={useForm.mobileError}
              errorType="required"
              style={{marginBottom: 50}}
            />
          )}
          {/* {useForm.userType == 'customer' && (
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
                errorMessage={useForm.confirmPassError}
                errorType="required"
                style={{marginBottom: 70}}
              />
            </>
          )} */}
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
