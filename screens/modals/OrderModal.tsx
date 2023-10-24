import React from "react";
import { StyleSheet, View } from "react-native";
import { WrapIcon } from "../../components";
import { FillButton, TextButton } from "../../components/buttons";
import { AppText } from "../../components/texts";
import { appColors } from "../../utils";
import { RootModal } from "./components";

const OrderModal = ({ onPress }: { onPress: () => void }) => {
  return (
    <RootModal onPress={onPress}>
      <View style={{ alignItems: "center" }}>
        <WrapIcon
          iconName="order"
          height={250}
          width={250}
          style={{ marginTop: 10 }}
        />

        <AppText label="Thank You" lblStyle={styles.thankStyle} />
        <AppText
          label="for your order"
          lblStyle={{ color: appColors.darkPlus, marginTop: 4 }}
        />

        <View style={{ marginVertical: 34 }}>
          <AppText
            label="Your Order is now being processed. We will let you know once the order is picked from the outlet. Check the status of your Order"
            lblStyle={styles.descStyle}
          />
        </View>

        <FillButton
          label="Track My Order"
          onPress={() => {}}
          btnStyle={styles.orderStyle}
        />

        <TextButton label="Back To Home" lblStyle={styles.backStyle} />
      </View>
    </RootModal>
  );
};

export default OrderModal;

const styles = StyleSheet.create({
  thankStyle: {
    fontSize: 26,
    marginTop: 29,
    fontWeight: "bold",
    color: appColors.darkPlus,
  },
  descStyle: {
    lineHeight: 20,
    textAlign: "center",
    color: appColors.darkPlus,
  },
  backStyle: {
    marginTop: 17,
    fontWeight: "bold",
    color: appColors.darkPlus,
  },
  orderStyle: {
    borderWidth: 0,
    backgroundColor: appColors.orange,
  },
});
