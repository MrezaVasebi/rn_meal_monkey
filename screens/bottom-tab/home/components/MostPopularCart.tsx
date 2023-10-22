import React from "react";
import { StyleSheet, View } from "react-native";
import { WrapIcon } from "../../../../components";
import { AppText } from "../../../../components/texts";
import { most_popular_type } from "../../../../types/most_popular_type";
import { appColors } from "../../../../utils";

const MostPopularCart = ({ item }: { item: most_popular_type }) => {
  return (
    <View style={styles.root}>
      <View style={styles.imgContainer}>
        <WrapIcon
          width={"100%"}
          height={"100%"}
          iconName={item.image}
          style={{ borderRadius: 10 }}
        />
      </View>

      <AppText label={item.foodName} lblStyle={styles.nameStyle} />

      <View style={styles.descStyle}>
        <AppText label={item.desc} />
        <WrapIcon
          iconName="start"
          height={10}
          width={10}
          style={{ marginLeft: 26 }}
        />

        <AppText label={item.score.toString()} lblStyle={styles.scoreStyle} />
      </View>
    </View>
  );
};

export default MostPopularCart;

const styles = StyleSheet.create({
  root: {
    width: 228,
    height: 200,
    marginRight: 19,
  },
  nameStyle: {
    fontSize: 16,
    marginVertical: 7,
    color: appColors.darkPlus,
  },
  descStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreStyle: {
    marginHorizontal: 5,
    color: appColors.orange,
  },
  imgContainer: {
    height: 135,
    borderRadius: 10,
    overflow: "hidden",
  },
});
