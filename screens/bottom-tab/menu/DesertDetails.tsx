import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { RootScreen, WrapIcon } from "../../../components";
import { AppButton } from "../../../components/buttons";
import { AppText } from "../../../components/texts";
import { appColors } from "../../../utils";

const DesertDetails = () => {
  return (
    <RootScreen scrollStyle={styles.root}>
      <View style={styles.topContainer}>
        <WrapIcon iconName="food_three" height={250} width={"100%"} />
      </View>

      <View style={styles.bottomContainer}>
        <View
          style={{
            ...styles.cartCircle,
            position: "absolute",
            top: -25,
            right: 20,
            zIndex: 1,
          }}
        >
          <WrapIcon iconName="heart" />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollStyle}
        >
          <View style={{ paddingHorizontal: 21 }}>
            <AppText
              label="Tandoori Chicken Pizza"
              lblStyle={styles.titleStyle}
            />

            <View style={styles.scoreStyle}>
              {[1, 2, 3, 4, 5].map((el) => {
                return (
                  <WrapIcon
                    key={el}
                    width={15}
                    height={15}
                    iconName="start"
                    style={{ marginRight: 5 }}
                    tintColor={appColors.orange}
                  />
                );
              })}
            </View>

            <AppText
              label="4 Star Ratings"
              lblStyle={{ color: appColors.orange }}
            />

            <View style={styles.priceContainer}>
              <AppText label="Rs. 750" lblStyle={styles.priceStyle} />
              <AppText label="/ per Portion" lblStyle={{ fontSize: 12 }} />
            </View>

            <View style={{ marginTop: 30 }}>
              <AppText
                label="Description"
                lblStyle={{ color: appColors.darkPlus, fontWeight: "bold" }}
              />

              <AppText
                label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare leo non mollis id cursus. Eu euismod faucibus in leo malesuada"
                lblStyle={{ marginTop: 11, lineHeight: 20 }}
              />
            </View>

            <AppText
              label="Customize your Order"
              lblStyle={styles.orderStyle}
            />

            {[
              "- Select the size of portion -",
              "- Select the ingredients -",
            ].map((el) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.selectStyle}
                >
                  <AppText
                    label={el}
                    lblStyle={{ color: appColors.darkPlus }}
                  />

                  <WrapIcon
                    iconName="down"
                    tintColor={appColors.darkGrey}
                    height={15}
                    width={15}
                  />
                </TouchableOpacity>
              );
            })}

            <View style={styles.countContainer}>
              <AppText label="Number of Portions" />

              <View style={styles.portionStyle}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.btnCountStyle}
                >
                  <AppText label="+" lblStyle={{ color: appColors.white }} />
                </TouchableOpacity>

                <View
                  style={{
                    ...styles.btnCountStyle,
                    ...styles.countStyle,
                  }}
                >
                  <AppText label="2" lblStyle={{ color: appColors.orange }} />
                </View>

                <TouchableOpacity style={styles.btnCountStyle}>
                  <AppText label="-" lblStyle={{ color: appColors.white }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.priceCartContainer}>
            <View style={styles.sideStyle} />

            <View style={styles.totalPriceContainer}>
              <AppText
                label="Total Price"
                lblStyle={{ color: appColors.darkPlus }}
              />

              <AppText
                label="LKR 1500"
                lblStyle={{
                  ...styles.priceStyle,
                  fontSize: 21,
                  marginVertical: 5,
                }}
              />

              <AppButton btnStyle={styles.btnCart}>
                <AppText
                  label="Aad to Cart"
                  lblStyle={{ color: appColors.white, marginLeft: 10 }}
                />

                <WrapIcon
                  iconName="cart"
                  height={15}
                  width={15}
                  tintColor={appColors.white}
                />
              </AppButton>

              <View style={styles.cartCircle}>
                <WrapIcon iconName="cart" tintColor={appColors.orange} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </RootScreen>
  );
};

export default DesertDetails;

const styles = StyleSheet.create({
  root: { padding: 0 },
  topContainer: {
    height: 250,
    width: "100%",
    position: "absolute",
  },
  scrollStyle: {
    flexGrow: 1,
    overflow: "hidden",
    paddingVertical: 15,
  },
  bottomContainer: {
    flex: 1,
    marginTop: 185,
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
    backgroundColor: appColors.white,
  },
  titleStyle: { fontSize: 22, color: appColors.darkPlus },
  scoreStyle: {
    marginVertical: 6,
    alignItems: "center",
    flexDirection: "row",
  },
  priceContainer: {
    top: 40,
    right: 21,
    position: "absolute",
    alignItems: "flex-end",
  },
  priceStyle: {
    fontSize: 31,
    fontWeight: "bold",
    color: appColors.darkPlus,
  },
  orderStyle: {
    fontSize: 14,
    marginTop: 32,
    marginBottom: 20,
    fontWeight: "bold",
    color: appColors.darkPlus,
  },
  selectStyle: {
    height: 45,
    borderRadius: 4,
    paddingLeft: 32,
    paddingRight: 12,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: appColors.grey,
  },
  btnCountStyle: {
    width: 52,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.orange,
  },
  countStyle: {
    borderWidth: 1,
    marginHorizontal: 5,
    borderColor: appColors.orange,
    backgroundColor: appColors.white,
  },
  countContainer: {
    marginTop: 28,
    marginBottom: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  portionStyle: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  priceCartContainer: {
    height: 170,
    alignItems: "center",
    justifyContent: "center",
  },
  sideStyle: {
    left: 0,
    width: 97,
    height: 170,
    position: "absolute",
    borderTopRightRadius: 38,
    borderBottomRightRadius: 38,
    backgroundColor: appColors.orange,
  },
  totalPriceContainer: {
    width: "78%",
    height: 122,
    elevation: 2,
    marginLeft: 25,
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 10,
    justifyContent: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 40,
    backgroundColor: appColors.white,
  },
  btnCart: {
    height: 35,
    width: 157,
    borderWidth: 0,
    flexDirection: "row-reverse",
    backgroundColor: appColors.orange,
  },
  cartCircle: {
    width: 47,
    right: -20,
    height: 47,
    elevation: 2,
    borderRadius: 23,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.white,
  },
});
