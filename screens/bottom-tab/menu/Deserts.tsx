import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { RootScreen, WrapIcon } from "../../../components";
import AppInput from "../../../components/inputs/AppInput";
import { AppText } from "../../../components/texts";
import { desert_item } from "../../../constant/desert_item";
import { appColors } from "../../../utils";
import { DesertItem } from "./components";

const Deserts = () => {
  return (
    <RootScreen root={styles.root}>
      <View style={styles.headerContainer}>
        <View style={styles.returnStyle}>
          <AppText label="Desserts" lblStyle={styles.lblTitle} />

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

      <View style={styles.inputContaineR}>
        <AppInput placeholder="Search food" isUsedWidth={true} width={"93%"} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingVertical: 10 }}
      >
        {desert_item.map((el, index) => {
          return <DesertItem item={el} key={index} />;
        })}
      </ScrollView>
    </RootScreen>
  );
};

export default Deserts;

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
    marginLeft: 20,
    color: appColors.darkPlus,
  },
  returnStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row-reverse",
  },
  inputContaineR: {
    marginTop: 24,
    marginBottom: 19,
    alignItems: "center",
  },
});
