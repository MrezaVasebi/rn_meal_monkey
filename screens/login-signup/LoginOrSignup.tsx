import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { RootScreen, WrapIcon } from "../../components";
import { FillButton } from "../../components/buttons";
import { AppText } from "../../components/texts";
import { appColors } from "../../utils";

const LoginOrSignup = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  let { width } = Dimensions.get("window");

  return (
    <RootScreen>
      <View style={{ alignItems: "center" }}>
        <WrapIcon width={width} iconName="back" height={350} />
      </View>

      <View style={{}}>
        <AppText
          lblStyle={styles.lblDescStyle}
          label="Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep"
        />
      </View>

      <FillButton
        label="Login"
        btnStyle={styles.btnStyle}
        onPress={() => nav.navigate("Login")}
      />

      <FillButton
        label="Create an Account"
        onPress={() => nav.navigate("SignUp")}
        btnStyle={styles.createAccountStyle}
        lblStyle={{ color: appColors.orange }}
      />
    </RootScreen>
  );
};

export default LoginOrSignup;

const styles = StyleSheet.create({
  lblDescStyle: {
    lineHeight: 20,
    marginVertical: 36,
    textAlign: "center",
    color: appColors.darkGrey,
  },
  btnStyle: {
    borderWidth: 0,
    width: "100%",
    backgroundColor: appColors.orange,
  },
  createAccountStyle: {
    marginTop: 25,
    borderWidth: 1,
    width: "100%",
    backgroundColor: appColors.white,
    borderColor: appColors.borderColor.orange,
  },
});
