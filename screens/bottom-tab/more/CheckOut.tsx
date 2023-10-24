import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  PageHeaderWithReturn,
  RootScreen,
  WrapIcon,
} from "../../../components";
import { FillButton, TextButton } from "../../../components/buttons";
import { AppText } from "../../../components/texts";
import { AppPadding, appColors } from "../../../utils";

const CheckOut = () => {
  return (
    <RootScreen scrollStyle={{ padding: 0 }}>
      <PageHeaderWithReturn
        label="CheckOut"
        isShowCart={false}
        rootStyle={{ marginTop: 20, paddingHorizontal: 21 }}
      />

      <View style={{ marginTop: 32, paddingHorizontal: AppPadding.l }}>
        <AppText label="Delivery Address" lblStyle={{ marginBottom: 16 }} />

        <View style={styles.addressContainer}>
          <AppText
            lblStyle={styles.lblAddress}
            label="653 Nostrand Ave., Brooklyn, NY 11216"
          />

          <TextButton
            label="Change"
            lblStyle={{ ...styles.lblAddress, color: appColors.orange }}
          />
        </View>
      </View>

      <View style={styles.line} />

      <View style={{ paddingHorizontal: AppPadding.l }}>
        <View style={styles.addCartContainer}>
          <AppText label="Payment method" />

          <TouchableOpacity style={styles.addCartStyle}>
            <WrapIcon
              iconName="add"
              tintColor={appColors.orange}
              height={10}
              width={10}
            />

            <AppText
              label="Add Cart"
              lblStyle={{
                ...styles.lblAddress,
                color: appColors.orange,
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
        </View>

        {[
          { label: "Cash on delivery", iconName: "" },
          { label: "**** **** **** 2187", iconName: "visa" },
          { label: "johndoe@email.com", iconName: "paypal" },
        ].map((el, index) => {
          return (
            <TouchableOpacity style={styles.paymentItemStyle} key={index}>
              <View style={styles.iconStyle}>
                {el.iconName !== "" && (
                  <WrapIcon height={30} width={30} iconName={el.iconName} />
                )}

                <AppText
                  label={el.label}
                  lblStyle={{ marginLeft: 10, color: appColors.darkPlus }}
                />
              </View>

              <View style={styles.circle} />
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.line} />

      <View style={{ paddingHorizontal: AppPadding.l }}>
        {[
          { lbl: "Sub Total", price: "$68" },
          { lbl: "Delivery Cost", price: "$2" },
          { lbl: "Discount", price: "-$4" },
        ].map((el, index) => {
          return (
            <View style={styles.itemStyle}>
              <AppText label={el.lbl} />

              <AppText label={el.price} lblStyle={styles.lblAddress} />
            </View>
          );
        })}

        <View style={{ ...styles.line, height: 1 }} />

        <View style={{ ...styles.itemStyle, marginTop: 0 }}>
          <AppText label={"Total"} />

          <AppText label={"-$66"} lblStyle={styles.lblAddress} />
        </View>
      </View>

      <View style={styles.line} />

      <View style={{ paddingHorizontal: AppPadding.l }}>
        <FillButton label="Send Order" btnStyle={styles.sendStyle} />
      </View>
    </RootScreen>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lblAddress: { color: appColors.darkPlus, fontSize: 15, fontWeight: "bold" },
  line: {
    height: 12,
    width: "100%",
    marginVertical: 18,
    backgroundColor: appColors.grey,
  },
  addCartContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addCartStyle: {
    alignItems: "center",
    flexDirection: "row",
  },
  paymentItemStyle: {
    padding: 10,
    marginTop: 13,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: appColors.grey,
  },
  iconStyle: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  circle: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 7.5,
    borderColor: appColors.orange,
  },
  itemStyle: {
    marginTop: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sendStyle: {
    width: "100%",
    borderWidth: 0,
    backgroundColor: appColors.orange,
  },
});
