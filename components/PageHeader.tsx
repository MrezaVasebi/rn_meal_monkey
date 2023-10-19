import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { appColors } from "../utils";
import WrapIcon from "./WrapIcon";
import { AppText } from "./texts";

const PageHeader = ({
  label,
  rootStyle,
}: {
  label: string;
  rootStyle?: object;
}) => {
  return (
    <View style={{ ...styles.headerContainer, ...rootStyle }}>
      <AppText label={label} lblStyle={styles.lblTitle} />

      <TouchableOpacity>
        <WrapIcon iconName="cart" />
      </TouchableOpacity>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lblTitle: {
    fontSize: 20,
    color: appColors.darkPlus,
  },
});
