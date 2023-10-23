export function handleIcons(iconName: string) {
  let iconList = {
    // icons
    logo: require("../assets/icons/logo.png"),
    bag: require("../assets/icons/bag.png"),
    cart: require("../assets/icons/cart.png"),
    down: require("../assets/icons/down.png"),
    edit: require("../assets/icons/edit.png"),
    home: require("../assets/icons/home.png"),
    income: require("../assets/icons/income.png"),
    info: require("../assets/icons/info.png"),
    like: require("../assets/icons/like.png"),
    list: require("../assets/icons/list.png"),
    mail: require("../assets/icons/mail.png"),
    notif: require("../assets/icons/notif.png"),
    right: require("../assets/icons/right.png"),
    search: require("../assets/icons/search.png"),
    setting: require("../assets/icons/setting.png"),
    start: require("../assets/icons/start.png"),
    user: require("../assets/icons/user.png"),
    back: require("../assets/icons/back.png"),
    splash: require("../assets/icons/splash.png"),
    google: require("../assets/icons/google-plus.png"),
    facebook: require("../assets/icons/facebook.png"),
    slideOne: require("../assets/icons/slide_one.png"),
    slideTwo: require("../assets/icons/slide_two.png"),
    slideThree: require("../assets/icons/slide_three.png"),
    heart: require("../assets/icons/heart.png"),
    check: require("../assets/icons/check.png"),
    visa: require("../assets/icons/visa.png"),
    add: require("../assets/icons/add.png"),
    close: require("../assets/icons/close.png"),
    empty_star: require("../assets/icons/empty_star.png"),
    location: require("../assets/icons/location-pin.png"),

    // img
    food_one: require("../assets/img/food_one.png"),
    food_two: require("../assets/img/food_two.png"),
    food_three: require("../assets/img/food_three.png"),
    food_four: require("../assets/img/food_four.png"),
    food_five: require("../assets/img/food_five.png"),
    food_six: require("../assets/img/food_six.png"),
    food_seven: require("../assets/img/food_seven.png"),
    profile: require("../assets/img/profile.png"),
  };

  return iconList[iconName as keyof typeof iconList];
}
