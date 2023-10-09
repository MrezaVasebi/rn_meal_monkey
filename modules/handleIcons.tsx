export function handleIcons(iconName: string) {
  let iconList = {
    logo: require("../assets/icons/logo.png"),
  };

  return iconList[iconName as keyof typeof iconList];
}
