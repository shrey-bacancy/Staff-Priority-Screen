import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import StyleConfig from "../../constants/StyleConfig";

const DefaultText = ({ textStyle, children }) => {
  return <Text style={{ ...styles.textStyle, ...textStyle }}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: StyleConfig.fontGilroyBold,
    fontSize: 14,
    color: StyleConfig.colors.mainText,
  },
});

export default DefaultText;
