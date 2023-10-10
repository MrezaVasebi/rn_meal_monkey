import React from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { appColors } from "../../utils";
import { AppText } from "../texts";
import AppButton from "./AppButton";

interface IFillButton {
  label: string;
  lblStyle?: object;
  btnStyle?: object;
}

const FillButton = (props: TouchableOpacityProps & IFillButton) => {
  let { label, lblStyle, btnStyle } = props;

  return (
    <AppButton
      onPress={props.onPress}
      btnStyle={{
        ...styles.btnStyle,
        ...btnStyle,
      }}
    >
      <AppText label={label} lblStyle={{ ...styles.lblStyle, ...lblStyle }} />
    </AppButton>
  );
};

export default FillButton;

const styles = StyleSheet.create({
  btnStyle: {},
  lblStyle: {
    fontSize: 16,
    color: appColors.white,
  },
});
