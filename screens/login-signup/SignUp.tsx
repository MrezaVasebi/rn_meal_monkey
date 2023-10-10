import React from "react";
import { StyleSheet, View } from "react-native";
import { RootScreen } from "../../components";
import { FillButton, TextButton } from "../../components/buttons";
import AppInput from "../../components/inputs/AppInput";
import { AppText } from "../../components/texts";
import { appColors } from "../../utils";
import { Headers } from "./components";

const SignUp = () => {
  return (
    <RootScreen root={styles.root}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Headers title="Sign Up" subTitle="Add your details to sign up" />
        {[
          "Name",
          "Email",
          "Mobile No",
          "Address",
          "Password",
          "Confirm Password",
        ].map((el) => {
          return (
            <AppInput
              key={el}
              placeholder={el}
              inputStyle={{ marginBottom: 28 }}
            />
          );
        })}

        <FillButton label="SignUp" btnStyle={styles.signupStyle} />
      </View>

      <View style={styles.loginStyle}>
        <AppText label="Already have an Account? " />

        <TextButton label="Login" lblStyle={{ color: appColors.orange }} />
      </View>
    </RootScreen>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  signupStyle: {
    borderWidth: 0,
    backgroundColor: appColors.orange,
  },
  loginStyle: {
    marginTop: 24,
    flexDirection: "row",
  },
});
