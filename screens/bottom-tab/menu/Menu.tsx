import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { RootScreen, WrapIcon } from "../../../components";
import AppInput from "../../../components/inputs/AppInput";
import { AppText } from "../../../components/texts";
import { menu_item } from "../../../constant/menu_item";
import { appColors } from "../../../utils";
import { MenuItem } from "./components";

const Menu = () => {
  return (
    <RootScreen root={styles.root}>
      <View style={styles.headerContainer}>
        <AppText label="Menu" lblStyle={styles.lblTitle} />

        <TouchableOpacity>
          <WrapIcon iconName="cart" />
        </TouchableOpacity>
      </View>

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
  },
  headerContainer: {
    marginTop: 20,
    flexDirection: "row",
    paddingHorizontal: 21,
    justifyContent: "space-between",
  },
  lblTitle: {
    fontSize: 20,
    color: appColors.darkPlus,
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
    marginBottom: 100,
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
