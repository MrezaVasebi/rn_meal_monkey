import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { PageHeader, RootScreen, WrapIcon } from "../../../components";
import AppInput from "../../../components/inputs/AppInput";
import { AppText } from "../../../components/texts";
import {
  category,
  most_popular,
  popular_restaurant,
  recent_item,
} from "../../../constant";
import { appColors } from "../../../utils";
import {
  CategoryCart,
  MostPopularCart,
  PopularRestaurantCart,
  RecentItemCart,
} from "./components";
import ViewAll from "./components/ViewAll";

const Home = () => {
  return (
    <RootScreen scrollStyle={styles.root}>
      <PageHeader
        label="Good morning Mreza!"
        rootStyle={{ marginHorizontal: 21 }}
      />

      <View style={{ marginVertical: 34, paddingLeft: 21 }}>
        <AppText label="Delivering to" lblStyle={{ fontSize: 11 }} />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AppText
            label="Current Location"
            lblStyle={{ fontSize: 16, color: appColors.darkPlus }}
          />

          <TouchableOpacity>
            <WrapIcon
              iconName="down"
              height={10}
              width={10}
              style={{ marginLeft: 40 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <AppInput
        isUsedWidth={true}
        placeholder="Search food"
        inputStyle={styles.inputStyle}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryStyle}
      >
        {category.map((el, index) => {
          return <CategoryCart item={el} key={index} />;
        })}
      </ScrollView>

      <ViewAll label="Popular Restaurants" />

      {popular_restaurant.map((el, index) => {
        return (
          <PopularRestaurantCart
            root={{ marginBottom: 10 }}
            key={index}
            item={el}
          />
        );
      })}

      <ViewAll label="Most Popular" root={{ marginTop: 42 }} />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 21 }}
      >
        {most_popular.map((el, index) => {
          return <MostPopularCart key={index} item={el} />;
        })}
      </ScrollView>

      <ViewAll label="Recent Item" root={{ marginTop: 42 }} />

      <View style={{ marginLeft: 21 }}>
        {recent_item.map((el, index) => {
          return <RecentItemCart item={el} key={index} />;
        })}
      </View>
    </RootScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    padding: 0,
  },
  categoryStyle: {
    marginTop: 30,
    paddingLeft: 21,
    marginBottom: 58,
  },
  inputStyle: { marginBottom: 19, marginHorizontal: 21 },
});
