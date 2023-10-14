import React from "react";
import { StyleSheet, View } from "react-native";
import { WrapIcon } from "../../../../components";
import { AppText } from "../../../../components/texts";
import { popular_restaurant_types } from "../../../../types";
import { appColors } from "../../../../utils";

const PopularRestaurantCart = ({
  item,
  root,
}: {
  root?: object;
  item: popular_restaurant_types;
}) => {
  return (
    <View style={{ ...styles.root, ...root }}>
      <WrapIcon iconName={item.image} width={"100%"} height={242} />

      <View style={{ paddingLeft: 21 }}>
        <AppText label={item.foodName} lblStyle={styles.nameStyle} />

        <View style={styles.descStyle}>
          <WrapIcon iconName="start" height={15} width={15} />

          <AppText label={item.score.toString()} lblStyle={styles.scoreStyle} />

          <AppText label={item.desc} />
        </View>
      </View>
    </View>
  );
};

export default PopularRestaurantCart;

const styles = StyleSheet.create({
  root: {},
  descStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameStyle: {
    fontSize: 16,
    marginVertical: 7,
    color: appColors.darkPlus,
  },
  scoreStyle: {
    marginHorizontal: 5,
    color: appColors.orange,
  },
});
