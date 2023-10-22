import React from "react";
import { StyleSheet, View } from "react-native";
import { PageHeaderWithReturn, RootScreen } from "../../../components";
import { AppText } from "../../../components/texts";
import { appColors } from "../../../utils";

const AboutUs = () => {
  let data = [
    {
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    },
  ];
  return (
    <RootScreen>
      <PageHeaderWithReturn label="About Us" />

      <View style={{ marginTop: 55 }}>
        {data.map((el, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.circle} />

              <View style={{ flex: 1 }}>
                <AppText label={el.msg} lblStyle={styles.lblMsg} />
              </View>
            </View>
          );
        })}
      </View>
    </RootScreen>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 8,
    flexDirection: "row",
  },
  circle: {
    width: 8,
    height: 8,
    marginRight: 9,
    borderRadius: 4,
    backgroundColor: appColors.orange,
  },
  lblMsg: {
    lineHeight: 20,
    color: appColors.darkPlus,
  },
});
