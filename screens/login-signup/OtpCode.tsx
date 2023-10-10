import React from "react";
import { StyleSheet, View } from "react-native";
import { RootScreen } from "../../components";
import { FillButton, TextButton } from "../../components/buttons";
import AppInput from "../../components/inputs/AppInput";
import { AppText } from "../../components/texts";
import { appColors } from "../../utils";
import { Headers } from "./components";

const OtpCode = () => {
  return (
    <RootScreen root={styles.root}>
      <Headers
        title="We have sent an OTP to
your Mobile"
        subTitle="Please check your mobile number 071*****12 
continue to reset your password"
      />

      <AppInput placeholder="OTP" />

      <FillButton label="Next" btnStyle={styles.btnNextStyle} />

      <View style={styles.clickHereStyle}>
        <AppText label="Didn't Receive? " />

        <TextButton label="Click Here" lblStyle={{ color: appColors.orange }} />
      </View>
    </RootScreen>
  );
};

export default OtpCode;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  btnNextStyle: {
    borderWidth: 0,
    marginTop: 24,
    backgroundColor: appColors.orange,
  },
  clickHereStyle: {
    marginTop: 32,
    flexDirection: "row",
  },
});
