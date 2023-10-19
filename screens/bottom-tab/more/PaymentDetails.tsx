import React from "react";
import { StyleSheet } from "react-native";
import { PageHeaderWithReturn, RootScreen } from "../../../components";

const PaymentDetails = () => {
  return (
    <RootScreen root={styles.root}>
      <PageHeaderWithReturn label="Payment Details" />
    </RootScreen>
  );
};

export default PaymentDetails;

const styles = StyleSheet.create({
  root: { padding: 0 },
});
