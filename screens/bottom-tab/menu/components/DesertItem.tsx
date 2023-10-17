import React from "react";
import { StyleSheet, View } from "react-native";
import { WrapIcon } from "../../../../components";
import { AppText } from "../../../../components/texts";
import { desert_item_type } from "../../../../types/";
import { appColors } from "../../../../utils";

const DesertItem = ({ item }: { item: desert_item_type }) => {
  return (
    <View style={styles.root}>
      <WrapIcon iconName={item.image} height={"100%"} width={"100%"} />

      <View style={styles.body}>
        <AppText label={item.foodName} lblStyle={styles.lblTitle} />

        <View style={styles.contentStyle}>
          <WrapIcon iconName="start" height={15} width={15} />

          <AppText label={item.score.toString()} lblStyle={styles.llbScore} />

          <AppText label={item.desc} lblStyle={styles.lblDesc} />
        </View>
      </View>
    </View>
  );
};

export default DesertItem;

const styles = StyleSheet.create({
  root: {
    height: 220,
    marginBottom: 5,
  },
  body: {
    bottom: 0,
    padding: 21,
    position: "absolute",
  },
  lblTitle: {
    fontSize: 16,
    color: appColors.white,
  },
  contentStyle: { marginTop: 6, flexDirection: "row", alignItems: "center" },
  llbScore: {
    marginLeft: 5,
    color: appColors.orange,
  },
  lblDesc: {
    marginLeft: 5,
    color: appColors.white,
  },
});
