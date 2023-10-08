import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { AppPadding, AppRadius, appColors } from "../../utils";

interface IAppInput {
  inputStyle?: object;
}

const AppInput = (props: TextInputProps & IAppInput) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      placeholderTextColor={appColors.placeholder}
      style={{ ...styles.style, ...props.inputStyle }}
    />
  );
};

export default AppInput;

const styles = StyleSheet.create({
  style: {
    width: 307,
    height: 56,
    paddingLeft: AppPadding.l,
    borderRadius: AppRadius.xl,
    backgroundColor: appColors.fillInput,
  },
});
