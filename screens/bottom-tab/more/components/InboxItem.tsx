import React from "react";
import { StyleSheet, View } from "react-native";
import { WrapIcon } from "../../../../components";
import { AppText } from "../../../../components/texts";
import { inbox_types } from "../../../../types";
import { appColors } from "../../../../utils";

const InboxItem = ({ el }: { el: inbox_types }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.circle} />

      <View style={{ flex: 1 }}>
        <AppText label={el.title} lblStyle={styles.lblTitle} />
        <AppText
          numberOfLines={2}
          label={el.subTitle}
          lblStyle={styles.lblSubTitle}
        />
      </View>

      <View style={{ alignItems: "center", justifyContent: "space-between" }}>
        <AppText label={el.date} lblStyle={styles.lblDateStyle} />

        <WrapIcon iconName="empty_star" height={12} width={12} />
      </View>
    </View>
  );
};

export default InboxItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: 10,
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#EEEEEE",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 32,
    backgroundColor: appColors.orange,
  },
  lblTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: appColors.darkPlus,
  },
  lblSubTitle: {
    marginTop: 11,
    color: "#B6B7B7",
  },
  lblDateStyle: {
    fontSize: 9,
    color: appColors.darkGrey,
  },
});
