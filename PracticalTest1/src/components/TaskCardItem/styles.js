import { StyleSheet } from "react-native";
import StyleConfig from "../../constants/StyleConfig";

const styles = (colorSchemeDarkAndLightMode, colorSchemeGreyAndLightMode) => {
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
      borderColor: StyleConfig.colors.outline,
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
    timeToCompleteTaskLate: {
      color: StyleConfig.colors.lateText,
    },
    deadlineStatus: {
      fontFamily: StyleConfig.fontGilroyRegular,
      textTransform: "capitalize",
    },
    workingStatus: {
      color: StyleConfig.colors.workingStatus,
      textTransform: "uppercase",
    },
    assignedByAndPriorityOrDoneButtonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    assignedBy: {
      paddingVertical: 9,
      color: colorSchemeDarkAndLightMode,
    },
    assignedByText: {
      fontFamily: StyleConfig.fontGilroyRegular,
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
    },
    priorityHighText: {
      textTransform: "capitalize",
      color: StyleConfig.colors.priorityHigh,
    },
    priorityNormalText: {
      color: StyleConfig.colors.priorityNormal,
    },
  });
};

export default styles;
