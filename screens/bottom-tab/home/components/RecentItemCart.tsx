import React from "react";
import { StyleSheet, View } from "react-native";
import { WrapIcon } from "../../../../components";
import { AppText } from "../../../../components/texts";
import { recent_item_type } from "../../../../types";
import { appColors } from "../../../../utils";

const RecentItemCart = ({
  item,
  root,
}: {
  root?: object;
  item: recent_item_type;
}) => {
  return (
    <View style={{ ...styles.root, ...root }}>
      <WrapIcon
        iconName={item.image}
        height={75}
        width={75}
        style={{ borderRadius: 10 }}
      />

      <View style={{ paddingLeft: 22 }}>
        <AppText label={item.foodName} lblStyle={styles.nameStyle} />

        <AppText label={item.desc} style={{ marginVertical: 3 }} />

        <View style={styles.descStyle}>
          <WrapIcon
            iconName="start"
            height={10}
            width={10}
            style={{ marginRight: 6 }}
          />

          <AppText label={item.score.toString()} />
        </View>
      </View>
    </View>
  );
};

export default RecentItemCart;

const styles = StyleSheet.create({
  root: {
    marginBottom: 15,
    flexDirection: "row",
  },
  nameStyle: {
    fontSize: 18,
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
});
