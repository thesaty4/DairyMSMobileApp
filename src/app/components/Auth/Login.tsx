import {useState} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import CustomInput from '../../../shared/components/form/CustomInput';
import CustomButton from '../../../shared/components/form/CustomButton';

const defaultForm = {
  email: '',
  password: '',
};

export default function Login() {
  const [useForm, setForm] = useState(defaultForm);

  const handleLogin = () => {};

  return (
    <View style={loginStyle.main}>
      <StatusBar backgroundColor="rgba(0, 0, 0, 0)" translucent />
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
            errorType="email"
          />
          <CustomInput
            label="Password"
            value={useForm.password}
            onChangeText={text => setForm({...useForm, password: text})}
            placeholder="Enter your password"
            errorType="required"
          />
          <View style={loginStyle.action}>
            <CustomButton
              buttonStyle={loginStyle.btn}
              title="Login"
              onPress={handleLogin}></CustomButton>
            <CustomButton
              buttonStyle={loginStyle.btn}
              title="SignUp"
              outline={true}
              onPress={handleLogin}></CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const loginStyle = StyleSheet.create({
  main: {
    height: '100%',
    flexDirection: 'column',
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: '49%',
  },
});
