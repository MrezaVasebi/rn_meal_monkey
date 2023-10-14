import React from "react";
import { StyleSheet, View } from "react-native";
import { WrapIcon } from "../../../../components";
import { AppText } from "../../../../components/texts";
import { category_type } from "../../../../types";
import { appColors } from "../../../../utils";

const CategoryCart = ({
  item,
  root,
}: {
  item: category_type;
  root?: object;
}) => {
  return (
    <View style={{ marginRight: 18, ...root }}>
      <WrapIcon
        iconName={item.image}
        height={80}
        width={80}
        style={styles.imgStyle}
      />

      <AppText label={item.name} lblStyle={styles.lblTitle} />
    </View>
  );
};

export default CategoryCart;

const styles = StyleSheet.create({
  imgStyle: {
    marginBottom: 7,
    borderRadius: 10,
  },
  lblTitle: {
    textAlign: "center",
    color: appColors.darkPlus,
  },
});
