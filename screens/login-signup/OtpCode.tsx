import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { RootScreen } from "../../components";
import { FillButton, TextButton } from "../../components/buttons";
import AppInput from "../../components/inputs/AppInput";
import { AppText } from "../../components/texts";
import { appColors } from "../../utils";
import { Headers } from "./components";

const OtpCode = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <RootScreen>
      <Headers
        title="We have sent an OTP to your Mobile"
        subTitle="Please check your mobile number 071*****12 continue to reset your password"
      />

      <AppInput isUsedWidth={true} placeholder="OTP" />

      <FillButton
        onPress={() => nav.navigate("NewPassword")}
        label="Next"
        btnStyle={styles.btnNextStyle}
      />

      <View style={styles.clickHereStyle}>
        <AppText label="Didn't Receive? " />

        <TextButton label="Click Here" lblStyle={{ color: appColors.orange }} />
      </View>
    </RootScreen>
  );
};

export default OtpCode;

const styles = StyleSheet.create({
  btnNextStyle: {
    borderWidth: 0,
    marginTop: 24,
    width: "100%",
    backgroundColor: appColors.orange,
  },
  clickHereStyle: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "center",
  },
});
