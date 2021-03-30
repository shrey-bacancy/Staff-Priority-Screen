import { StyleSheet } from "react-native";
import StyleConfig from "../../constants/StyleConfig";

const styles = (colorSchemeDarkAndLightMode) => {
  return StyleSheet.create({
    itemContainer: {
      marginHorizontal: 21,
      marginBottom: 21,
    },
    taskItemContainer: {
      borderRadius: 10,
      overflow: "hidden",
    },
    taskDetailsContainer: {
      flexDirection: "row",
      padding: 13,
      justifyContent: "space-between",
      height: 90,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: colorSchemeDarkAndLightMode,
    },
    taskAndProjectNameContainer: {
      justifyContent: "space-evenly",
    },
    taskName: {
      fontSize: 20,
      color: colorSchemeDarkAndLightMode,
    },
    projectName: {
      fontFamily: StyleConfig.fontGilroyRegular,
    },
    timeDeadlineContainer: {
      justifyContent: "space-between",
    },
    timeContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    timeToCompleteTask: {
      fontSize: 16,
      textAlign: "right",
      paddingLeft: 7,
      color: colorSchemeDarkAndLightMode,
    },
    deadlineOrWorkingStatus: {
      fontFamily: StyleConfig.fontGilroyRegular,
      textTransform: "capitalize",
    },
    assignedByAndPriorityOrDoneButtonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    assignedBy: {
      fontFamily: StyleConfig.fontGilroyRegular,
      paddingVertical: 9,
      color: colorSchemeDarkAndLightMode,
    },
    assignedByNameText: {
      color: colorSchemeDarkAndLightMode,
    },
    buttonContainerStyle: {
      borderRadius: 20,
      overflow: "hidden",
      position: "absolute",
      bottom: "45%",
      left: "70%",
    },
    buttonStyle: {
      paddingHorizontal: 27,
      backgroundColor: StyleConfig.colors.primaryColor,
    },
    priority: {
      fontFamily: StyleConfig.fontGilroyRegular,
      paddingVertical: 9,
      color: colorSchemeDarkAndLightMode,
    },
    priorityTypeText: {
      textTransform: "capitalize",
      color: StyleConfig.colors.priorityHigh,
    },
  });
};

export default styles;
