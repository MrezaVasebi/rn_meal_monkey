import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "../../../../components/texts";
import { appColors } from "../../../../utils";

const NotificationItem = ({
  item,
}: {
  item: {
    desc: string;
    time: string;
  };
}) => {
  return (
    <View style={styles.itemStyle}>
      <View style={styles.circle} />

      <View style={{ flex: 1 }}>
        <View>
          <AppText lblStyle={styles.descStyle} label={item?.desc} />
        </View>
        <AppText lblStyle={styles.timeStyle} label={item?.time} />
      </View>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  itemStyle: {
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
  descStyle: {
    lineHeight: 20,
  },
  timeStyle: {
    marginTop: 5,
    fontSize: 12,
    color: appColors.placeholder,
  },
});
