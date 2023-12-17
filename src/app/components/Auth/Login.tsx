import {ImageBackground, StyleSheet, Text, View} from 'react-native';

export default function Login() {
  return (
    <View>
      <ImageBackground
        source={require('../../../../assets/images/background.png')}
        style={loginStyle.bgImage}></ImageBackground>
      <Text style={loginStyle.loginText}>Login</Text>
    </View>
  );
}

const loginStyle = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  loginText: {
    position: 'absolute',
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 150,
    fontWeight: '800',
  },
});
