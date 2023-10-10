import React from "react";
import { StyleSheet } from "react-native";
import { RootScreen } from "../../components";
import { FillButton } from "../../components/buttons";
import AppInput from "../../components/inputs/AppInput";
import { appColors } from "../../utils";
import { Headers } from "./components";

const NewPassword = () => {
  return (
    <RootScreen root={styles.root}>
      <Headers
        title="New Password"
        subTitle="Please enter your email to receive a 
link to  create a new password via email"
      />

      <AppInput placeholder="New Password" />

      <AppInput placeholder="Confirm Password" inputStyle={{ marginTop: 28 }} />

      <FillButton label="Next" btnStyle={styles.btnNextStyle} />
    </RootScreen>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  btnNextStyle: {
    marginTop: 28,
    borderWidth: 0,
    backgroundColor: appColors.orange,
  },
});
