import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomInput from '../../../shared/components/form/CustomInput';
import CustomButton from '../../../shared/components/form/CustomButton';
import {appColors} from '../../../shared/constants/color';
import {commonStyles} from '../../../shared/constants/commonStyles';
import {useNavigation} from '@react-navigation/native';
import {router} from '../../../shared/routes/router';

export const defaultForm: Record<string, any> = {
  email: '',
  password: '',
  emailError: null,
  passwordError: null,
};

export default function Login() {
  const [useForm, setForm] = useState(defaultForm);
  const useRouter: any = useNavigation();

  const handleForm = () => {
    const errorMsg = 'This field is required.';
    setForm({
      ...useForm,
      emailError: useForm?.email?.trim()?.length ? null : errorMsg,
      passwordError: useForm?.password?.trim()?.length ? null : errorMsg,
    });
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
          <Text style={loginStyle.loginText}>Login</Text>
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
          <CustomInput
            label="Password"
            value={useForm.password}
            onChangeText={text => setForm({...useForm, password: text})}
            placeholder="Enter your password"
            errorMessage={useForm.passwordError}
            errorType="required"
          />
          <TouchableOpacity
            onPress={() => {
              useRouter.navigate(router.forgotPassword.route);
            }}>
            <View>
              <Text style={loginStyle.forgotPassword}>Forgot Password ?</Text>
            </View>
          </TouchableOpacity>
          <View style={loginStyle.action}>
            <CustomButton
              buttonStyle={loginStyle.btn}
              title="Login"
              onPress={handleForm}></CustomButton>
            <CustomButton
              buttonStyle={loginStyle.btn}
              title="SignUp"
              outline={true}
              onPress={() => {
                useRouter.navigate(router.signUp.route);
              }}></CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export const loginStyle = StyleSheet.create({
  main: {
    height: '100%',
    ...commonStyles.flexColumn,
  },
  bgImage: {
    ...commonStyles.coverImg,
  },
  logoContainer: {
    width: 350,
    height: 40,
    marginBottom: 20,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  formWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  topSection: {
    ...commonStyles.centerContainer,
  },
  forgotPassword: {
    fontSize: 12,
    marginBottom: 10,
    color: appColors.primary,
    borderBottomWidth: 1,
    width: 100,
    borderColor: appColors.primary,
  },
  loginText: {
    fontSize: 30,
    fontWeight: '800',
    color: 'white',
  },
  bottomSection: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 40,
  },
  action: {
    width: '100%',
    flexDirection: 'row',
    ...commonStyles.flexSpaceBetween,
  },
  btn: {
    width: '49%',
  },
});
