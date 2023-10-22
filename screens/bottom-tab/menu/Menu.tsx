import React from "react";
import { StyleSheet, View } from "react-native";
import { PageHeader, RootScreen } from "../../../components";
import AppInput from "../../../components/inputs/AppInput";
import { menu_item } from "../../../constant/menu_item";
import { appColors } from "../../../utils";
import { MenuItem } from "./components";

const Menu = () => {
  return (
    <RootScreen scrollStyle={styles.root}>
      <PageHeader
        label="Menu"
        rootStyle={{ marginHorizontal: 21, marginTop: 20 }}
      />

      <View style={styles.inputContaineR}>
        <AppInput placeholder="Search food" isUsedWidth={true} width={"93%"} />
      </View>

      <View style={styles.container}>
        <View style={styles.sideStyle} />

        <View style={styles.itemContainer}>
          {menu_item.map((el, index) => {
            return (
              <MenuItem
                item={el}
                key={index}
                rootStyle={{ marginBottom: 20 }}
              />
            );
          })}
        </View>
      </View>
    </RootScreen>
  );
};

export default Menu;

const styles = StyleSheet.create({
  root: {
    padding: 0,
    paddingBottom: 15,
  },
  inputContaineR: {
    marginTop: 24,
    marginBottom: 19,
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingLeft: 53,
    paddingRight: 21,
  },
  itemContainer: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: "space-evenly",
  },
  sideStyle: {
    width: 97,
    height: "100%",
    position: "absolute",
    borderTopRightRadius: 38,
    borderBottomRightRadius: 38,
    backgroundColor: appColors.orange,
  },
});
