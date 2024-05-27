import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { RootScreen } from "../../components";
import { FillButton } from "../../components/buttons";
import AppInput from "../../components/inputs/AppInput";
import { appColors } from "../../utils";
import { Headers } from "./components";

const NewPassword = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <RootScreen scrollStyle={styles.root}>
      <Headers
        title="New Password"
        subTitle="Please enter your email to receive a link to  create a new password via email"
      />

      <AppInput
        isUsedWidth={false}
        placeholder="New Password"
        inputStyle={{ width: "100%" }}
      />

      <AppInput
        isUsedWidth={false}
        placeholder="Confirm Password"
        inputStyle={{ marginTop: 28, width: "100%" }}
      />

      <FillButton
        label="Next"
        btnStyle={styles.btnNextStyle}
        onPress={() => nav.navigate("SwapList")}
      />
    </RootScreen>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  btnNextStyle: {
    width: "100%",
    marginTop: 28,
    borderWidth: 0,
    backgroundColor: appColors.orange,
  },
});
