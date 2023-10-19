import React from "react";
import {
  DimensionValue,
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";
import { AppPadding, AppRadius, appColors } from "../../utils";

interface IAppInput {
  inputStyle?: object;
  isUsedWidth?: boolean;
  width?: DimensionValue;
}

const AppInput = (props: TextInputProps & IAppInput) => {
  let { isUsedWidth = false } = props;

  let customStyle = {};
  if (!isUsedWidth) {
    customStyle = { width: 307 };
  } else {
    customStyle = { width: props.width };
  }

  return (
    <TextInput
      value={props.value}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      placeholderTextColor={appColors.placeholder}
      style={{ ...styles.style, ...customStyle, ...props.inputStyle }}
    />
  );
};

export default AppInput;

const styles = StyleSheet.create({
  style: {
    height: 56,
    paddingLeft: AppPadding.l,
    borderRadius: AppRadius.xl,
    backgroundColor: appColors.fillInput,
  },
});
