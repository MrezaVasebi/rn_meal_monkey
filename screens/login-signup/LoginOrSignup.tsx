import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { RootScreen, WrapIcon } from "../../components";
import { FillButton } from "../../components/buttons";
import { AppText } from "../../components/texts";
import { appColors } from "../../utils";

const LoginOrSignup = () => {
  let { width } = Dimensions.get("window");

  return (
    <RootScreen scrollStyle={styles.scrollStyle}>
      <WrapIcon width={width} iconName="back" height={350} />

      <View style={{ marginHorizontal: 50 }}>
        <AppText
          lblStyle={styles.lblDescStyle}
          label="Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep"
        />
      </View>

      <FillButton label="Login" btnStyle={styles.btnStyle} />

      <FillButton
        label="Create an Account"
        btnStyle={styles.createAccountStyle}
        lblStyle={{ color: appColors.orange }}
      />
    </RootScreen>
  );
};

export default LoginOrSignup;

const styles = StyleSheet.create({
  scrollStyle: {
    alignItems: "center",
  },
  lblDescStyle: {
    lineHeight: 20,
    marginVertical: 36,
    textAlign: "center",
    color: appColors.darkGrey,
  },
  btnStyle: {
    borderWidth: 0,
    backgroundColor: appColors.orange,
  },
  createAccountStyle: {
    marginTop: 25,
    borderWidth: 1,
    backgroundColor: appColors.white,
    borderColor: appColors.borderColor.orange,
  },
});
