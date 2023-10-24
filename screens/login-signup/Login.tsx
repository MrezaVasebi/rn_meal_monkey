import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { RootScreen } from "../../components";
import {
  ButtonWithIcon,
  FillButton,
  TextButton,
} from "../../components/buttons";
import AppInput from "../../components/inputs/AppInput";
import { AppText } from "../../components/texts";
import { appColors } from "../../utils";
import { Headers } from "./components";

const Login = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <RootScreen scrollStyle={styles.scrollStyle}>
      <Headers title="Login" subTitle="Add your details to login" />

      <AppInput placeholder="Your Email" />
      <AppInput placeholder="Password" inputStyle={{ marginVertical: 26 }} />

      <FillButton
        label="Login"
        btnStyle={styles.btnLoginStyle}
        onPress={() => nav.navigate("BottomNav")}
      />

      <TextButton
        label="Forgot your password?"
        onPress={() => nav.navigate("ResetPassword")}
        btnStyle={{ marginBottom: 49 }}
      />

      <AppText label="or Login With" />

      <ButtonWithIcon
        width={15}
        height={15}
        iconName="facebook"
        label="Login with Facebook"
        btnStyle={{ backgroundColor: appColors.blue, marginVertical: 26 }}
      />

      <ButtonWithIcon
        width={15}
        height={15}
        iconName="google"
        label="Login with Google"
        btnStyle={{ backgroundColor: appColors.red }}
      />

      <View style={styles.signupStyle}>
        <AppText label="Don't have an Account? " />

        <TextButton
          label="Sign Up"
          lblStyle={{ color: appColors.orange }}
          onPress={() => nav.navigate("SignUp")}
        />
      </View>
    </RootScreen>
  );
};

export default Login;

const styles = StyleSheet.create({
  scrollStyle: {
    alignItems: "center",
  },
  btnLoginStyle: {
    borderWidth: 0,
    marginBottom: 24,
    backgroundColor: appColors.orange,
  },
  signupStyle: {
    marginTop: 24,
    flexDirection: "row",
  },
});
