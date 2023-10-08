import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { AppRadius } from "../../utils";

const AppButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.5}
      style={{ ...styles.btnStyle }}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  btnStyle: {
    height: 56,
    width: 307,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: AppRadius.xl,
  },
});
