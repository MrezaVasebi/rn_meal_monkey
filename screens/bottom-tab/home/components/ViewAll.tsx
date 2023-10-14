import React from "react";
import { StyleSheet, View } from "react-native";
import { TextButton } from "../../../../components/buttons";
import { AppText } from "../../../../components/texts";
import { appColors } from "../../../../utils";

const ViewAll = ({ label, root }: { label: string; root?: object }) => {
  return (
    <View style={{ ...styles.root, ...root }}>
      <AppText label={label} lblStyle={styles.lblTitle} />

      <TextButton label="View All" lblStyle={{ color: appColors.orange }} />
    </View>
  );
};

export default ViewAll;

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 21,
    justifyContent: "space-between",
  },
  lblTitle: {
    fontSize: 20,
    color: appColors.darkPlus,
  },
});
