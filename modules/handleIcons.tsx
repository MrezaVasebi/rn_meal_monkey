export function handleIcons(iconName: string) {
  let iconList = {
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
  };

  return iconList[iconName as keyof typeof iconList];
}
