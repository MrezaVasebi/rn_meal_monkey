import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { RootScreen, WrapIcon } from "../../components";
import { FillButton } from "../../components/buttons";
import { AppText } from "../../components/texts";
import { AppPadding, appColors } from "../../utils";

let { width } = Dimensions.get("window");

const SwapList = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  let scrollRef: React.MutableRefObject<null> = useRef(null);

  let data = [
    {
      image: "slideOne",
      title: "Find Food You Love",
      desc: "Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep",
    },
    {
      image: "slideTwo",
      title: "Fast Delivery",
      desc: "Fast food delivery to your home, office wherever you are",
    },
    {
      image: "slideThree",
      title: "Live Tracking",
      desc: "Real time tracking of your food on the app once you placed the order",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function handleScroll(event: any) {
    setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / width));
  }

  function handleOnPressNext() {
    if (currentIndex === data.length - 1) {
      nav.navigate("BottomNav");
    } else {
      scrollRef?.current?.scrollTo({
        x: width * (currentIndex + 1),
        animated: true,
      });

      setCurrentIndex((pre) => pre + 1);
    }
  }

  return (
    <RootScreen scrollStyle={styles.root}>
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          ref={scrollRef}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
        >
          {data.map((el, index) => {
            return (
              <View key={index} style={styles.itemStyle}>
                <WrapIcon height={300} width={300} iconName={el.image} />

                <AppText lblStyle={styles.lblTitleStyle} label={el.title} />

                <AppText label={el.desc} lblStyle={styles.lblDescStyle} />
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.dotContainer}>
        {data.map((ele, indexPlus) => {
          return (
            <View
              key={indexPlus}
              style={{
                ...styles.dotStyle,
                backgroundColor:
                  currentIndex === indexPlus
                    ? appColors.orange
                    : appColors.grey,
                marginRight: data.length - 1 === indexPlus ? 0 : 10,
              }}
            />
          );
        })}
      </View>

      <View style={styles.btnContainer}>
        <FillButton
          label={currentIndex === data.length - 1 ? `Let's go` : "Next"}
          btnStyle={styles.btnStyle}
          onPress={handleOnPressNext}
        />
      </View>
    </RootScreen>
  );
};

export default SwapList;

const styles = StyleSheet.create({
  root: {
    padding: 0,
    paddingBottom: 10,
  },
  itemStyle: {
    width: width,
    marginTop: 100,
    alignItems: "center",
    padding: AppPadding.xl,
  },
  lblTitleStyle: {
    fontSize: 28,
    marginTop: 70,
    marginBottom: 33,
    color: appColors.darkPlus,
  },
  lblDescStyle: {
    lineHeight: 20,
    textAlign: "center",
    marginHorizontal: 50,
  },
  btnContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  btnStyle: {
    borderWidth: 0,
    backgroundColor: appColors.orange,
  },
  dotContainer: {
    marginTop: 15,
    bottom: "45%",
    left: width / 2,
    position: "absolute",
    flexDirection: "row",
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
