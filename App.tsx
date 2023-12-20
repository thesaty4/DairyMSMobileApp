import 'react-native-gesture-handler';
import React from 'react';
import Login from './src/app/components/Auth/Login';
import {router} from './src/shared/routes/router';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './src/app/components/Auth/SignUp';
import {StatusBar} from 'react-native';
import ForgotPassword from './src/app/components/Auth/ForgotPassword';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="rgba(0, 0, 0, 0)" translucent />
      <Stack.Navigator initialRouteName={router.login.route}>
        <Stack.Screen
          name={router.login.route}
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name={router.signUp.route}
          options={{headerShown: false}}
          component={SignUp}
        />
        <Stack.Screen
          name={router.forgotPassword.route}
          options={{headerShown: false}}
          component={ForgotPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
