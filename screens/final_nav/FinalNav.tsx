// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { BottomNav } from "../bottom-tab/bottonNav";
import { LoginNav } from "../login-signup";

const Stack = createNativeStackNavigator();

function FinalNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoginNav" component={LoginNav} />
        <Stack.Screen name="BottomNav" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default FinalNav;
