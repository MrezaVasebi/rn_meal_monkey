import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { appColors } from "../utils";
import WrapIcon from "./WrapIcon";
import { AppText } from "./texts";

const PageHeaderWithReturn = ({
  label,
  rootStyle,
}: {
  label: string;
  rootStyle?: object;
}) => {
  return (
    <View style={{ ...styles.headerContainer, ...rootStyle }}>
      <View style={styles.returnStyle}>
        <AppText label={label} lblStyle={styles.lblTitle} />

        <TouchableOpacity activeOpacity={0.5}>
          <WrapIcon
            width={15}
            height={15}
            iconName="right"
            tintColor={appColors.darkPlus}
            style={{ transform: [{ rotate: "180deg" }] }}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <WrapIcon iconName="cart" />
      </TouchableOpacity>
    </View>
  );
};

export default PageHeaderWithReturn;

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lblTitle: {
    fontSize: 20,
    marginLeft: 20,
    color: appColors.darkPlus,
  },
  returnStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row-reverse",
  },
});
