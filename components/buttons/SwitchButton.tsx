import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AppRadius, appColors } from "../../utils";

interface ISwitchButton {
  btnStyle?: {};
  isSelected: boolean;
  onPress: () => void;
}

const SwitchButton = (props: ISwitchButton) => {
  let { isSelected, onPress, btnStyle } = props;

  let style: object = {};
  if (isSelected)
    style = { right: 0, top: -2, backgroundColor: appColors.orange };
  else style = { left: 0, top: -2, backgroundColor: "#C1C1C1" };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.btnStyle, ...btnStyle }}
    >
      <View style={{ ...styles.circleStyle, ...style }} />
    </TouchableOpacity>
  );
};

export default memo(SwitchButton);

const styles = StyleSheet.create({
  btnStyle: {
    width: 33,
    height: 17,
    borderRadius: AppRadius.xl,
    backgroundColor: appColors.grey,
  },
  circleStyle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: "absolute",
  },
});
