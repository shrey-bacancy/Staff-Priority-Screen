import { StyleSheet } from "react-native";
import StyleConfig from "../../constants/StyleConfig";

const styles = StyleSheet.create({
  scrollableTabViewStyle: {
    paddingTop: 30,
  },
  scrollableTabBarStyle: {
    borderBottomWidth: 0,
    paddingHorizontal: 20,
  },
  tabBarTextStyle: {
    fontFamily: StyleConfig.fontGilroyBold,
    fontSize: 14,
    fontWeight: undefined,
  },
  tabBarUnderlineStyle: {
    borderRadius: 40,
    backgroundColor: StyleConfig.colors.primaryColor,
  },
  taskListStyle: {
    marginTop: 30,
    width: StyleConfig.width,
  },
});

export default styles;
