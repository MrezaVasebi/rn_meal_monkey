import React from "react";
import {
  DimensionValue,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import WrapIcon from "../WrapIcon";
import { AppText } from "../texts";
import AppButton from "./AppButton";

interface IButtonWithIcon {
  label: string;
  bgColor?: string;
  lblStyle?: object;
  btnStyle?: object;

  iconName: string;
  tintColor?: string;
  width: DimensionValue;
  height: DimensionValue;
}

const ButtonWithIcon = (props: TouchableOpacityProps & IButtonWithIcon) => {
  return (
    <AppButton
      onPress={props.onPress}
      style={{
        ...styles.btnStyle,
        backgroundColor: props.bgColor,
        ...props.btnStyle,
      }}
    >
      <AppText
        label={props.label}
        lblStyle={{ ...props.lblStyle, ...styles.lblStyle }}
      />

      <WrapIcon
        width={props.width}
        height={props.height}
        iconName={props.iconName}
        tintColor={props.tintColor}
      />
    </AppButton>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  btnStyle: {},
  lblStyle: {},
});
