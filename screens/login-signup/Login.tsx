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
  return (
    <RootScreen root={styles.root}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Headers title="Login" subTitle="Add your details to login" />

        <AppInput placeholder="Your Email" />
        <AppInput placeholder="Password" inputStyle={{ marginVertical: 26 }} />

        <FillButton label="Login" btnStyle={styles.loginStyle} />

        <TextButton
          label="Forgot your password?"
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
      </View>

      <View style={styles.signupStyle}>
        <AppText label="Don't have an Account? " />

        <TextButton label="Sign Up" lblStyle={{ color: appColors.orange }} />
      </View>
    </RootScreen>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  loginStyle: {
    borderWidth: 0,
    marginBottom: 24,
    backgroundColor: appColors.orange,
  },
  signupStyle: {
    marginTop: 24,
    flexDirection: "row",
  },
});
