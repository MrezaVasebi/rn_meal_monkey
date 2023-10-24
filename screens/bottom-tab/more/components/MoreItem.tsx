import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { WrapIcon } from "../../../../components";
import { AppText } from "../../../../components/texts";
import { more_item_types } from "../../../../types";
import { appColors } from "../../../../utils";

const MoreItem = ({ el }: { el: more_item_types }) => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity
      onPress={() => nav.navigate(el.routeName)}
      style={styles.itemStyle}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.circle}>
          <WrapIcon
            iconName={el.iconName}
            tintColor={appColors.darkPlus}
            height={25}
            width={25}
          />
        </View>

        <AppText label={el.label} lblStyle={styles.labelStyle} />
      </View>

      <View style={{ flexDirection: "row" }}>
        {el.badge !== 0 && (
          <View style={styles.badgeStyle}>
            <AppText
              label={el.badge.toString()}
              lblStyle={{ color: appColors.white }}
            />
          </View>
        )}

        <View style={styles.arrowContainer}>
          <WrapIcon
            tintColor={appColors.darkPlus}
            iconName="right"
            height={15}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MoreItem;

const styles = StyleSheet.create({
  itemStyle: {
    height: 75,
    width: "94%",
    borderRadius: 7,
    marginBottom: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: appColors.grey,
  },
  circle: {
    width: 53,
    height: 53,
    borderRadius: 26.5,
    marginHorizontal: 13,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D8D8D8",
  },
  badgeStyle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.red,
  },
  labelStyle: {
    color: appColors.darkPlus,
    fontSize: 14,
  },
  arrowContainer: {
    width: 33,
    height: 33,
    right: -20,
    borderRadius: 16,
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: appColors.grey,
  },
});
