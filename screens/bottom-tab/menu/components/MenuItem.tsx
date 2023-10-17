import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { WrapIcon } from "../../../../components";
import { AppText } from "../../../../components/texts";
import { menu_item_type } from "../../../../types";
import { appColors } from "../../../../utils";

const MenuItem = ({
  item,
  imgStyle,
  rootStyle,
}: {
  rootStyle?: object;
  imgStyle?: object;
  item: menu_item_type;
}) => {
  const handleShapeStyle = () => {
    switch (item.shapeName) {
      case "square":
        return {
          borderRadius: 19,
        };
      case "circle":
        return {
          borderRadius: 35,
        };
      case "triangle":
        return { transform: [{ rotate: "45deg" }] };
      default:
        break;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{ ...styles.root, ...rootStyle }}
    >
      <View style={styles.arrowContainer}>
        <WrapIcon iconName="right" height={15} width={15} />
      </View>

      <View style={{ ...styles.imgStyle, ...handleShapeStyle() }}>
        <WrapIcon
          width={"100%"}
          height={"100%"}
          iconName={item.image}
          style={{ borderRadius: 19 }}
        />
      </View>

      <View style={{ marginLeft: 70, marginTop: 15 }}>
        <AppText label={item.foodName} lblStyle={styles.lblTitle} />
        <AppText label={`${item.count}  items`} lblStyle={styles.lblDesc} />
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  root: {
    height: 87,
    elevation: 2,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 10,
    backgroundColor: appColors.white,
  },
  arrowContainer: {
    top: 25,
    width: 33,
    height: 33,
    right: -15,
    elevation: 2,
    borderRadius: 16,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.white,
  },
  imgStyle: {
    top: 8,
    zIndex: 1,
    width: 70,
    left: -30,
    height: 70,
    overflow: "hidden",
    position: "absolute",
  },
  lblTitle: { fontSize: 22, color: appColors.darkPlus },
  lblDesc: {
    marginTop: 2,
  },
});
