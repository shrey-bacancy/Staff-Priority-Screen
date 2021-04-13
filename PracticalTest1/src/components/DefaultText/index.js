import React from "react";
import { Text } from "react-native-elements";
import styles from "./styles";

const DefaultText = ({ textStyle, children }) => {
  return <Text style={{ ...styles.textStyle, ...textStyle }}>{children}</Text>;
};

export default DefaultText;
