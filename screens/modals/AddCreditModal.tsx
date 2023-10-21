import React from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { WrapIcon } from "../../components";
import { AppButton, SwitchButton } from "../../components/buttons";
import AppInput from "../../components/inputs/AppInput";
import { AppText } from "../../components/texts";
import { appColors } from "../../utils";

const AddCreditModal = ({ onPress }: { onPress: () => void }) => {
  return (
    <Modal transparent statusBarTranslucent animationType="fade">
      <View style={styles.root}>
        <View style={styles.innerStyle}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 15 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.headerStyle}>
              <View style={{ alignItems: "flex-end" }}>
                <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
                  <WrapIcon iconName="close" height={12} width={12} />
                </TouchableOpacity>
              </View>

              <AppText
                label="Add Credit/Debit Card"
                lblStyle={styles.titleStyle}
              />
            </View>

            <View style={styles.line} />

            <AppInput
              isUsedWidth={false}
              placeholder="Card Number"
              inputStyle={{ marginVertical: 19 }}
            />

            <View style={styles.expireContent}>
              <AppText
                label="Expiry"
                lblStyle={{ color: appColors.darkPlus }}
              />

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
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AddCreditModal;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,.5)",
  },
  innerStyle: {
    width: "100%",
    height: "80%",
    overflow: "hidden",
    paddingHorizontal: 23,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: appColors.white,
  },
  headerStyle: {
    marginTop: 13.5,
  },
  titleStyle: { color: appColors.darkPlus, fontSize: 14, fontWeight: "bold" },
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
