import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  PageHeaderWithReturn,
  RootScreen,
  WrapIcon,
} from "../../../components";
import { FillButton } from "../../../components/buttons";
import { AppText } from "../../../components/texts";
import { my_order_data } from "../../../constant";
import { AppPadding, appColors } from "../../../utils";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const MyOrder = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <RootScreen scrollStyle={{ padding: 0 }}>
      <PageHeaderWithReturn
        label="My Order"
        isShowCart={false}
        rootStyle={{ marginTop: 20, paddingHorizontal: 21 }}
      />

      <View style={styles.topItem}>
        <WrapIcon
          width={90}
          height={90}
          iconName="food_one"
          style={{ borderRadius: 10 }}
        />

        <View style={styles.topDesc}>
          <AppText label="King Burgers" />

          <View style={styles.itemContainer}>
            <WrapIcon iconName="start" height={12} width={12} />

            <AppText
              label="4.9"
              lblStyle={{ color: appColors.orange, marginHorizontal: 5 }}
            />

            <AppText label="(124 ratings)" lblStyle={{ color: "#B6B7B7" }} />
          </View>

          <View style={styles.itemContainer}>
            <AppText label="Burger" lblStyle={{ color: "#B6B7B7" }} />

            <View style={styles.circle} />

            <AppText label="Western Food" lblStyle={{ color: "#B6B7B7" }} />
          </View>

          <View style={styles.itemContainer}>
            <WrapIcon iconName="location" height={12} width={12} />
            <AppText
              label="No 03, 4th Lane, NewYork"
              lblStyle={{ color: "#B6B7B7", marginLeft: 5 }}
            />
          </View>
        </View>
      </View>

      <View style={styles.foodContainer}>
        {my_order_data.map((el, index) => {
          return (
            <View key={index} style={styles.eachItemContainer}>
              <AppText
                label={el.name}
                lblStyle={{ color: appColors.darkPlus }}
              />
              <AppText
                label={el.price}
                lblStyle={{ color: appColors.darkPlus }}
              />
            </View>
          );
        })}
      </View>

      <View style={styles.body}>
        <View style={styles.deliveryContainer}>
          <AppText
            label="Delivery Instrusctions"
            lblStyle={{ color: appColors.darkPlus }}
          />

          <TouchableOpacity style={styles.addNotesStyle}>
            <WrapIcon
              iconName="add"
              tintColor={appColors.orange}
              height={10}
              width={10}
            />

            <AppText label="Add Notes" lblStyle={styles.lblAddNotes} />
          </TouchableOpacity>
        </View>

        <View style={styles.lineStyle} />

        {[
          { lbl: "Sub Total", price: "68$" },
          { lbl: "Delivery Cost", price: "2$" },
        ].map((el, index) => {
          return (
            <View key={index} style={styles.foodItem}>
              <AppText
                label={el.lbl}
                lblStyle={{ color: appColors.darkPlus }}
              />

              <AppText label={el.price} lblStyle={styles.totalStyle} />
            </View>
          );
        })}

        <View style={styles.lineStyle} />

        <View style={styles.deliveryContainer}>
          <AppText label="Total" lblStyle={{ color: appColors.darkPlus }} />

          <AppText
            label="70$"
            lblStyle={{
              ...styles.totalStyle,
              fontSize: 22,
            }}
          />
        </View>

        <FillButton
          label="Checkout"
          btnStyle={styles.checkStyle}
          onPress={() => nav.navigate("CheckOut")}
        />
      </View>
    </RootScreen>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  topItem: { marginVertical: 35, flexDirection: "row", paddingHorizontal: 21 },
  topDesc: { flex: 1, marginLeft: 17 },
  itemContainer: {
    marginTop: 3,
    alignItems: "center",
    flexDirection: "row",
  },
  circle: {
    width: 5,
    height: 5,
    marginLeft: 10,
    marginRight: 2,
    borderRadius: 2.5,
    backgroundColor: appColors.orange,
  },
  foodContainer: {
    marginTop: 37,
    marginBottom: 15,
    backgroundColor: "#F6F6F6",
  },
  eachItemContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "#707070",
    paddingHorizontal: 21,
    justifyContent: "space-between",
  },
  body: { marginTop: 16, marginBottom: 32, paddingHorizontal: AppPadding.l },
  addNotesStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  lblAddNotes: {
    marginLeft: 10,
    color: appColors.orange,
  },
  deliveryContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lineStyle: {
    height: 2,
    width: "100%",
    marginVertical: 17.5,
    backgroundColor: appColors.grey,
  },
  foodItem: {
    marginBottom: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkStyle: {
    width: "100%",
    marginTop: 24,
    borderWidth: 0,
    backgroundColor: appColors.orange,
  },
  totalStyle: { color: appColors.orange, fontWeight: "bold" },
});
