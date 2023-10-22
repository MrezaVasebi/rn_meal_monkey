import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  PageHeaderWithReturn,
  RootScreen,
  WrapIcon,
} from "../../../components";
import { AppButton, TextButton } from "../../../components/buttons";
import { AppText } from "../../../components/texts";
import { appColors } from "../../../utils";
import { AddCreditModal } from "../../modals";

const PaymentDetails = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <RootScreen scrollStyle={{ padding: 0 }}>
      <PageHeaderWithReturn
        label="Payment Details"
        rootStyle={{ paddingHorizontal: 21, marginTop: 20 }}
      />

      <View style={styles.containerStyle}>
        <AppText
          label="Customize your payment method"
          lblStyle={styles.lblDesc}
        />

        <View style={styles.lineStyle} />
      </View>

      <View style={styles.cardStyle}>
        <View style={styles.cartHeader}>
          <AppText
            label="Cash/Card on delivery"
            lblStyle={{ color: appColors.darkPlus }}
          />

          <WrapIcon iconName="check" height={15} width={15} />
        </View>

        <View
          style={{ ...styles.lineStyle, backgroundColor: appColors.iconGrey }}
        />

        <View style={styles.cartBody}>
          <View style={styles.cartContent}>
            <WrapIcon iconName="visa" height={31} width={53} />

            <AppText
              label="**** ****      2187"
              lblStyle={{ marginLeft: 19 }}
            />
          </View>

          <AppButton btnStyle={styles.deleteStyle}>
            <AppText
              label="Delete Card"
              lblStyle={{ color: appColors.orange }}
            />
          </AppButton>
        </View>

        <View
          style={{ ...styles.lineStyle, backgroundColor: appColors.iconGrey }}
        />

        <View style={styles.cartBottom}>
          <TextButton
            label="Other Methods"
            lblStyle={{ color: appColors.darkPlus }}
          />
        </View>
      </View>

      <View style={styles.anotherStyleContainer}>
        <AppButton
          onPress={() => setShowModal(true)}
          btnStyle={styles.btnAnotherStyle}
        >
          <WrapIcon
            height={16}
            width={16}
            iconName="add"
            tintColor={appColors.white}
          />

          <AppText
            label="Add Another Credit/Debit Card"
            lblStyle={{ color: appColors.white, marginLeft: 23 }}
          />
        </AppButton>
      </View>

      {showModal && <AddCreditModal onPress={() => setShowModal(false)} />}
    </RootScreen>
  );
};

export default PaymentDetails;

const styles = StyleSheet.create({
  containerStyle: {
    paddingLeft: 21,
    marginTop: 28,
    marginBottom: 20,
  },
  lblDesc: {
    fontSize: 16,
    fontWeight: "bold",
    color: appColors.darkPlus,
  },
  lineStyle: {
    height: 1,
    width: "100%",
    marginTop: 16.5,
    backgroundColor: appColors.grey,
  },
  cardStyle: {
    height: 167,
    elevation: 2,
    paddingVertical: 26,
    alignItems: "center",
    paddingHorizontal: 23,
    justifyContent: "center",
    backgroundColor: "#F7F7F7",
  },
  cartHeader: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  cartBody: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  deleteStyle: {
    width: 90,
    height: 35,
    borderColor: appColors.orange,
  },
  cartContent: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  cartBottom: { alignSelf: "stretch", marginTop: 13 },
  anotherStyleContainer: { marginHorizontal: 21, marginTop: 35 },
  btnAnotherStyle: {
    width: "100%",
    borderWidth: 0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: appColors.orange,
  },
});
