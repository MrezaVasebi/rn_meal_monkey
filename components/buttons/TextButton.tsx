import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { appColors } from "../../utils";
import { AppText } from "../texts";

interface ITextButton {
  label: string;
  lblStyle?: object;
  btnStyle?: object;
}

const TextButton = (props: TouchableOpacityProps & ITextButton) => {
  let { label, lblStyle, btnStyle } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={{
        ...styles.btnStyle,
        ...btnStyle,
      }}
    >
      <AppText label={label} lblStyle={{ ...styles.lblStyle, ...lblStyle }} />
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  btnStyle: {},
  lblStyle: {
    fontSize: 14,
    color: appColors.darkGrey,
  },
});
