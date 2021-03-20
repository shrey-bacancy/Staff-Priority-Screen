import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StyleConfig from "../constants/StyleConfig";

const DefaultText = (props) => {
  return (
    <Text style={{ ...styles.textStyle, ...props.textStyle }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Gilroy-Bold",
    fontSize: 14,
    color: StyleConfig.colors.mainText,
  },
});

export default DefaultText;
