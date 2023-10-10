import React from "react";
import { StyleSheet } from "react-native";
import { RootScreen } from "../../components";
import { FillButton } from "../../components/buttons";
import AppInput from "../../components/inputs/AppInput";
import { appColors } from "../../utils";
import { Headers } from "./components";

const ResetPassword = () => {
  return (
    <RootScreen root={styles.root}>
      <Headers
        title="Reset Password"
        subTitle="Please enter your email to receive a 
link to  create a new password via email"
      />

      <AppInput placeholder="Email" />

      <FillButton label="Send" btnStyle={styles.btnSendStyle} />
    </RootScreen>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  btnSendStyle: {
    borderWidth: 0,
    marginTop: 24,
    backgroundColor: appColors.orange,
  },
});
