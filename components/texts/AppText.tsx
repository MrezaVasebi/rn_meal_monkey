import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { appColors } from "../../utils";

interface IAppText {
  label?: string;
  lblStyle?: object;
}

const AppText = (props: TextProps & IAppText) => {
  let { label, lblStyle } = props;
  return (
    <Text
      numberOfLines={props.numberOfLines}
      style={{ ...styles.lblStyle, ...lblStyle }}
    >
      {label}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  lblStyle: {
    fontFamily: "medium",
    color: appColors.darkGrey,
  },
});
