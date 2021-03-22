import { StyleSheet } from "react-native";
import StyleConfig from "../../constants/StyleConfig";

const styles = (isDarkMode) =>
  StyleSheet.create({
    containerStyleCommon: {
      flex: 1,
    },
    headerContainer: {
      flexDirection: "row",
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    headingText: {
      textTransform: "uppercase",
      fontFamily: StyleConfig.fontGilroyBlack,
      fontSize: 24,
      letterSpacing: 2,
      color: isDarkMode ? StyleConfig.colors.white : StyleConfig.colors.black,
    },
    subHeadingText: {
      fontSize: 18,
      letterSpacing: 2.5,
    },
  });

export default styles;
