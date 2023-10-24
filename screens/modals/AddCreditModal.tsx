import React from "react";
import { StyleSheet, View } from "react-native";
import { WrapIcon } from "../../components";
import { AppButton, SwitchButton } from "../../components/buttons";
import AppInput from "../../components/inputs/AppInput";
import { AppText } from "../../components/texts";
import { appColors } from "../../utils";
import { RootModal } from "./components";

const AddCreditModal = ({ onPress }: { onPress: () => void }) => {
  return (
    <RootModal
      onPress={onPress}
      isShowTitle={true}
      title="Add Credit/Debit Card"
    >
      <View style={styles.line} />

      <AppInput
        isUsedWidth={false}
        placeholder="Card Number"
        inputStyle={{ marginVertical: 19 }}
      />

      <View style={styles.expireContent}>
        <AppText label="Expiry" lblStyle={{ color: appColors.darkPlus }} />

        <View style={styles.expiryContainer}>
          <AppInput
            placeholder="MM"
            inputStyle={{
              ...styles.expireInputStyle,
              marginRight: 29,
              paddingLeft: 0,
            }}
          />
          <AppInput
            placeholder="YY"
            inputStyle={{ ...styles.expireInputStyle, paddingLeft: 0 }}
          />
        </View>
      </View>

      <View style={{ marginTop: 19 }}>
        {["Security Code", "First Name", "Last Name"].map((el, index) => {
          return (
            <AppInput
              key={index}
              placeholder={el}
              inputStyle={{ width: "100%", marginBottom: 19 }}
            />
          );
        })}
      </View>

      <View style={styles.radioStyle}>
        <AppText label="You can remove this card at anytime" />

        <SwitchButton isSelected={true} onPress={() => {}} />
      </View>

      <View style={styles.anotherStyleContainer}>
        <AppButton btnStyle={styles.btnAnotherStyle}>
          <WrapIcon
            height={16}
            width={16}
            iconName="add"
            tintColor={appColors.white}
          />

          <AppText
            label="Add Card"
            lblStyle={{ color: appColors.white, marginLeft: 23 }}
          />
        </AppButton>
      </View>
    </RootModal>
  );
};

export default AddCreditModal;

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "100%",
    marginTop: 16.5,
    backgroundColor: appColors.grey,
  },
  expireContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  expiryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  expireInputStyle: {
    width: 103,
    height: 56,
    textAlign: "center",
  },
  radioStyle: {
    marginTop: 20,
    paddingRight: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  anotherStyleContainer: { marginTop: 38 },
  btnAnotherStyle: {
    width: "100%",
    borderWidth: 0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: appColors.orange,
  },
});
