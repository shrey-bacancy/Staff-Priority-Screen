import React from "react";
import {
  StyleSheet,
  TouchableNativeFeedback,
  useColorScheme,
  View,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import Strings from "../constants/Strings";
import StyleConfig from "../constants/StyleConfig";
import DefaultText from "./DefaultText";

const TaskCardItem = (props) => {
  const isDarkMode = useColorScheme() === "dark";

  const colorSchemeDarkAndLightMode = isDarkMode
    ? StyleConfig.colors.white
    : StyleConfig.colors.black;

  const colorSchemePriority =
    props.priorityType === "Normal"
      ? StyleConfig.colors.priorityNormal
      : StyleConfig.colors.priorityHigh;

  let statusStyle;

  if (props.status === "Working") {
    statusStyle = {
      color: StyleConfig.colors.workingStatus,
      textTransform: "uppercase",
    };
  }

  return (
    <View style={styles().itemContainer}>
      <View style={styles().taskItemContainer}>
        <TouchableNativeFeedback>
          <View style={styles(isDarkMode).taskDetailsContainer}>
            <View style={styles().taskAndProjectNameContainer}>
              <DefaultText textStyle={styles(isDarkMode).taskName}>
                {Strings.TaskCardItem.taskName}
              </DefaultText>
              <DefaultText textStyle={styles().projectName}>
                {Strings.TaskCardItem.projectName}
              </DefaultText>
            </View>
            <View style={styles().timeDeadlineContainer}>
              <View style={styles().timeContainer}>
                {props.iconClockShow && (
                  <Icon
                    name={Strings.TaskCardItem.clockIconName}
                    type={Strings.TaskCardItem.clockIconType}
                    size={24}
                    color={
                      isDarkMode
                        ? StyleConfig.colors.white
                        : StyleConfig.colors.black
                    }
                  />
                )}
                {props.taskDone && (
                  <Icon
                    name={Strings.TaskCardItem.checkIconName}
                    type={Strings.TaskCardItem.checkIconType}
                    size={24}
                    color={StyleConfig.colors.taskCompleteIcon}
                  />
                )}
                <DefaultText
                  textStyle={{
                    ...styles().timeToCompleteTask,
                    ...{
                      color: props.isLate
                        ? StyleConfig.colors.lateText
                        : colorSchemeDarkAndLightMode,
                    },
                  }}
                >
                  {props.taskTime}
                </DefaultText>
              </View>
              {props.taskDone === false ||
                (props.taskDone === undefined && (
                  <DefaultText
                    textStyle={{
                      ...styles().deadlineOrWorkingStatus,
                      ...statusStyle,
                    }}
                  >
                    {props.status}{" "}
                    {props.status === "Due" ? `in ${props.deadlineTime}` : null}
                  </DefaultText>
                ))}
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>

      <View style={styles().assignedByAndPriorityOrDoneButtonContainer}>
        <DefaultText textStyle={styles(isDarkMode).assignedBy}>
          {props.assignedByName && (
            <DefaultText>{Strings.TaskCardItem.assignedByText}</DefaultText>
          )}
          <DefaultText textStyle={styles(isDarkMode).assignedByNameText}>
            {props.assignedByName}
          </DefaultText>
        </DefaultText>
        {props.taskDone ? (
          <Button
            title={Strings.TaskCardItem.buttonTitle}
            containerStyle={styles().buttonContainerStyle}
            buttonStyle={styles().buttonStyle}
          />
        ) : (
          <DefaultText textStyle={styles(isDarkMode).priority}>
            {Strings.TaskCardItem.priorityText}
            <DefaultText
              textStyle={{
                ...styles().priorityTypeText,
                ...{ color: colorSchemePriority },
              }}
            >
              {props.priorityType}
            </DefaultText>
          </DefaultText>
        )}
      </View>
    </View>
  );
};

const styles = (isDarkMode) =>
  StyleSheet.create({
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
      borderColor: isDarkMode
        ? StyleConfig.colors.white
        : StyleConfig.colors.black,
    },
    taskAndProjectNameContainer: {
      justifyContent: "space-evenly",
    },
    taskName: {
      fontSize: 20,
      color: isDarkMode ? StyleConfig.colors.white : StyleConfig.colors.black,
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
      color: isDarkMode ? StyleConfig.colors.white : StyleConfig.colors.black,
    },
    assignedByNameText: {
      color: isDarkMode ? StyleConfig.colors.white : StyleConfig.colors.black,
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
      color: isDarkMode ? StyleConfig.colors.white : StyleConfig.colors.black,
    },
    priorityTypeText: {
      textTransform: "capitalize",
    },
  });

export default TaskCardItem;
