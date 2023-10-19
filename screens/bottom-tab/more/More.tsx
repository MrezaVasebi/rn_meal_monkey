import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { PageHeader, RootScreen, WrapIcon } from "../../../components";
import { AppText } from "../../../components/texts";
import { appColors } from "../../../utils";

const More = () => {
  let data = [
    { label: "Payment Details", iconName: "income", badge: 0 },
    { label: "My Orders", iconName: "bag", badge: 0 },
    { label: "Notification", iconName: "notif", badge: 15 },
    { label: "Inbox", iconName: "mail", badge: 0 },
    { label: "About Us", iconName: "info", badge: 0 },
  ];

  return (
    <RootScreen root={styles.root}>
      <PageHeader label="More" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, marginTop: 31 }}
      >
        {data.map((el, index) => {
          return (
            <View style={styles.itemStyle}>
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
            </View>
          );
        })}
      </ScrollView>
    </RootScreen>
  );
};

export default More;

const styles = StyleSheet.create({
  root: {},
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
