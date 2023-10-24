import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Login from "./Login";
import LoginOrSignup from "./LoginOrSignup";
import NewPassword from "./NewPassword";
import OtpCode from "./OtpCode";
import ResetPassword from "./ResetPassword";
import SignUp from "./SignUp";
import Splash from "./Splash";
import SwapList from "./SwapList";

const Stack = createNativeStackNavigator();

function LoginNav() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="LoginOrSignup" component={LoginOrSignup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="OtpCode" component={OtpCode} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="SwapList" component={SwapList} />
    </Stack.Navigator>
  );
}

export default LoginNav;
