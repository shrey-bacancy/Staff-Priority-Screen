import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import StyleConfig from "../constants/StyleConfig";

const ProjectTabItem = (props) => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View
      style={{
        ...styles.tabItemContainer,
        ...{
          backgroundColor:
            props.selectedItem === props.itemData.item.id
              ? StyleConfig.colors.primaryColor
              : StyleConfig.colors.inactiveTabBackground,
        },
      }}
    >
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={styles.tabContainer}>
          <Text
            style={{
              ...styles.tabLabel,
              ...{
                color:
                  props.selectedItem === props.itemData.item.id
                    ? Colors.white
                    : StyleConfig.colors.mainText,
              },
            }}
          >
            {props.itemData.item.label}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  tabItemContainer: {
    borderRadius: 30,
    overflow: "hidden",
    marginRight: StyleConfig.width / 20,
  },
  tabContainer: {
    paddingHorizontal: StyleConfig.width / 15,
    paddingVertical: StyleConfig.height / 100,
    borderRadius: 30,
  },
  tabLabel: {
    fontFamily: "Gilroy-Bold",
    fontSize: 14,
  },
});

export default ProjectTabItem;
