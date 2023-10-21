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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.avatarContainer}>
          <View style={styles.avatarStyle}>
            <WrapIcon iconName="profile" height={"100%"} width={"100%"} />
          </View>

          <View style={styles.editContainer}>
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
  avatarContainer: {
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarStyle: {
    width: 102,
    height: 102,
    borderRadius: 51,
  },
  editContainer: {
    marginVertical: 18,
    flexDirection: "row-reverse",
  },
  btnSave: {
    width: "100%",
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.orange,
  },
});
