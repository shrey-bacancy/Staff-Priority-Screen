import { StyleSheet } from "react-native";
import StyleConfig from "../../constants/StyleConfig";

const styles = (colorSchemeDarkAndLightMode) => {
  return StyleSheet.create({
    itemContainer: {
      marginHorizontal: StyleConfig.width / 20,
      marginBottom: StyleConfig.width / 20,
    },
    taskItemContainer: {
      borderRadius: 10,
      overflow: "hidden",
    },
    taskDetailsContainer: {
      flexDirection: "row",
      padding: StyleConfig.width / 30,
      justifyContent: "space-between",
      height: StyleConfig.height / 10,
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
      paddingLeft: StyleConfig.width / 60,
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
      paddingVertical: StyleConfig.width / 50,
      color: colorSchemeDarkAndLightMode,
    },
    assignedByNameText: {
      color: colorSchemeDarkAndLightMode,
    },
    buttonContainerStyle: {
      marginRight: StyleConfig.width / 20,
      borderRadius: 20,
      overflow: "hidden",
      position: "absolute",
      bottom: "40%",
      left: "70%",
    },
    buttonStyle: {
      paddingHorizontal: StyleConfig.width / 15,
      backgroundColor: StyleConfig.colors.primaryColor,
    },
    priority: {
      fontFamily: StyleConfig.fontGilroyRegular,
      paddingVertical: StyleConfig.width / 50,
      color: colorSchemeDarkAndLightMode,
    },
    priorityTypeText: {
      textTransform: "capitalize",
    },
  });
};

export default styles;
