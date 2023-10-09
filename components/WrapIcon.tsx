import { DimensionValue, Image } from "react-native";
import { handleIcons } from "../modules/handleIcons";

interface IWrapIcon {
  iconName: string;
  tintColor?: string;
  width?: DimensionValue;
  height?: DimensionValue;
}

const WrapIcon = (props: IWrapIcon) => {
  let { iconName, height = 25, width = 25, tintColor } = props;

  return (
    <Image
      tintColor={tintColor}
      source={handleIcons(iconName)}
      style={{
        width,
        height,
        resizeMode: "contain",
      }}
    />
  );
};

export default WrapIcon;
