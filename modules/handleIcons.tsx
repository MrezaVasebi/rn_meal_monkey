export function handleIcons(iconName: string): string {
  let iconList = {
    card: "",
  };

  return iconList[iconName as keyof typeof iconList];
}
