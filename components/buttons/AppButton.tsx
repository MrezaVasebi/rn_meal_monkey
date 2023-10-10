import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { AppRadius } from "../../utils";

interface IAppButton {
  btnStyle?: object;
}

const AppButton = (props: TouchableOpacityProps & IAppButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={{ ...styles.btnStyle, ...props.btnStyle }}
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
