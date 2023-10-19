import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { PageHeader, RootScreen, WrapIcon } from "../../../components";
import { AppButton, TextButton } from "../../../components/buttons";
import AppInput from "../../../components/inputs/AppInput";
import { AppText } from "../../../components/texts";
import { appColors } from "../../../utils";

const Profile = () => {
  let data = [
    { label: "Name", value: "Mreza Vasebi" },
    { label: "Email", value: "mreza.vaseb@yahoo.com" },
    { label: "Mobile No", value: "09332738864" },
    { label: "Address", value: "Iran, Tabriz" },
    { label: "Password", value: "**********" },
    { label: "Confirm Password", value: "**********" },
  ];

  return (
    <RootScreen>
      <PageHeader label="Profile" />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 102,
            height: 102,
            borderRadius: 51,
          }}
        >
          <WrapIcon iconName="profile" height={"100%"} width={"100%"} />
        </View>

        <View
          style={{
            marginVertical: 18,
            flexDirection: "row-reverse",
          }}
        >
          <TextButton
            label="Edit Profile"
            lblStyle={{ color: appColors.orange, marginLeft: 10 }}
          />

          <WrapIcon iconName="edit" height={15} width={15} />
        </View>

        <AppText
          label="Hi there Emilia!"
          lblStyle={{ color: appColors.darkPlus, fontSize: 16 }}
        />

        <TextButton label="Sign Out" btnStyle={{ marginTop: 5 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ alignItems: "center", marginTop: 47 }}>
          {data.map((el, index) => {
            return (
              <AppInput
                key={index}
                value={el.value}
                placeholder={el.label}
                inputStyle={{ marginBottom: 17, width: "100%" }}
              />
            );
          })}
        </View>

        <AppButton btnStyle={styles.btnSave}>
          <AppText label="Save" lblStyle={{ color: appColors.white }} />
        </AppButton>
      </ScrollView>
    </RootScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {},
  headerContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lblTitle: {
    fontSize: 20,
    color: appColors.darkPlus,
  },
  btnSave: {
    width: "100%",
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.orange,
  },
});
