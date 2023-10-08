import React from "react";
import { DimensionValue, Image } from "react-native";
import { handleIcons } from "../modules/handleIcons";

interface IWrapIcon {
  iconName: string;
  myWidth: DimensionValue;
  myHeight: DimensionValue;
}

const WrapIcon = (props: IWrapIcon) => {
  return (
    <Image
      source={require(handleIcons(props.iconName))}
      style={{
        width: props.myWidth,
        resizeMode: "contain",
        height: props.myHeight,
      }}
    />
  );
};

export default WrapIcon;
