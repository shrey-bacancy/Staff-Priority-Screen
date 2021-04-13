import React from "react";
import { TouchableNativeFeedback, View } from "react-native";
import { DefaultText } from "..";
import styles from "./styles";

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

export default ProjectTabItem;
