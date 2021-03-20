import React from "react";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import StyleConfig from "../constants/StyleConfig";
import DefaultText from "./DefaultText";

const ProjectTabItem = (props) => {
  return (
    <View style={styles(props).tabItemContainer}>
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={styles(props).tabContainer}>
          <DefaultText textStyle={styles(props).tabLabel}>
            {props.label}
          </DefaultText>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

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

export default ProjectTabItem;
