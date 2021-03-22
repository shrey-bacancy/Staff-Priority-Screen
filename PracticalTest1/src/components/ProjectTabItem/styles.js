import { StyleSheet } from "react-native";
import StyleConfig from "../../constants/StyleConfig";

const styles = (props) =>
  StyleSheet.create({
    tabItemContainer: {
      borderRadius: 30,
      overflow: "hidden",
      marginRight: 20,
      backgroundColor:
        props.selectedItem === props.id
          ? StyleConfig.colors.primaryColor
          : StyleConfig.colors.inactiveTabBackground,
    },
    tabContainer: {
      paddingHorizontal: 28,
      paddingVertical: 9,
    },
    tabLabel: {
      color:
        props.selectedItem === props.id
          ? StyleConfig.colors.white
          : StyleConfig.colors.mainText,
    },
  });

export default styles;
