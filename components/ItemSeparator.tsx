import React from "react";
import { DimensionValue, View } from "react-native";

const ItemSeparator = ({
  height = 30,
}: {
  height: DimensionValue | undefined;
}) => {
  return <View style={{ height }} />;
};

export default ItemSeparator;
