import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  useColorScheme,
  View,
} from "react-native";
import { Button } from "react-native-elements";
import StyleConfig from "../constants/StyleConfig";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const TaskCardItem = (props) => {
  const isDarkMode = useColorScheme() === "dark";
  const colorSchemeDarkAndLightMode = isDarkMode
    ? StyleConfig.colors.white
    : StyleConfig.colors.black;
  const colorSchemePriority =
    props.priorityType === "Normal" ||
    props.priorityType === "normal" ||
    props.priorityType === "NORMAL"
      ? StyleConfig.colors.priorityNormal
      : StyleConfig.colors.priorityHigh;

  let statusStyle;

  if (
    props.status === "Working" ||
    props.status === "working" ||
    props.status === "WORKING"
  ) {
    statusStyle = {
      color: StyleConfig.colors.working,
      textTransform: "uppercase",
    };
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.taskItemContainer}>
        <TouchableNativeFeedback>
          <View
            style={{
              ...styles.taskDetailsContainer,
              ...{ borderColor: colorSchemeDarkAndLightMode },
            }}
          >
            <View style={{ justifyContent: "space-evenly" }}>
              <Text
                style={{
                  ...styles.taskName,
                  ...{ color: colorSchemeDarkAndLightMode },
                }}
              >
                Task One
              </Text>
              <Text
                style={{
                  ...styles.projectName,
                  ...{ color: StyleConfig.colors.mainText },
                }}
              >
                Project One
              </Text>
            </View>
            <View style={{ justifyContent: "space-between" }}>
              <View style={styles.timeContainer}>
                {props.iconClockShow && (
                  <EvilIcons
                    name="clock"
                    size={24}
                    color={colorSchemeDarkAndLightMode}
                  />
                )}
                {props.taskDone && (
                  <FontAwesome
                    name="check-circle"
                    size={24}
                    color={StyleConfig.colors.taskCompleteIcon}
                  />
                )}
                <Text
                  style={{
                    ...styles.timeToCompleteTask,
                    ...{
                      color: props.isLate
                        ? StyleConfig.colors.lateText
                        : colorSchemeDarkAndLightMode,
                    },
                  }}
                >
                  {props.taskTime}
                </Text>
              </View>
              {props.taskDone === false ||
                (props.taskDone === undefined && (
                  <Text
                    style={{
                      ...styles.deadlineOrWorkingStatus,
                      ...statusStyle,
                    }}
                  >
                    {props.status}{" "}
                    {props.status === "Due" ||
                    props.status === "due" ||
                    props.status === "DUE"
                      ? `in ${props.deadlineTime}`
                      : null}
                  </Text>
                ))}
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>

      <View style={styles.assignedByAndPriorityOrDoneContainer}>
        <Text
          style={{
            ...styles.assignedBy,
            ...{ color: colorSchemeDarkAndLightMode },
          }}
        >
          {props.assignedByName && <Text>Assigned By:</Text>}{" "}
          <Text
            style={{
              ...styles.assignedByNameText,
              ...{ color: colorSchemeDarkAndLightMode },
            }}
          >
            {props.assignedByName}
          </Text>
        </Text>
        {props.taskDone ? (
          <Button
            title="Done"
            containerStyle={styles.buttonContainerStyle}
            buttonStyle={styles.buttonStyle}
          />
        ) : (
          <Text
            style={{
              ...styles.priority,
              ...{ color: colorSchemeDarkAndLightMode },
            }}
          >
            Priority:{" "}
            <Text
              style={{
                ...styles.priorityTypeText,
                ...{ color: colorSchemePriority, textTransform: "capitalize" },
              }}
            >
              {props.priorityType}
            </Text>
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  taskName: {
    fontFamily: "Gilroy-Bold",
    fontSize: 20,
  },
  projectName: {
    fontFamily: "Gilroy-Regular",
    fontSize: 14,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  timeToCompleteTask: {
    fontFamily: "Gilroy-Bold",
    fontSize: 16,
    textAlign: "right",
    paddingLeft: StyleConfig.width / 60,
  },
  deadlineOrWorkingStatus: {
    fontFamily: "Gilroy-Regular",
    fontSize: 14,
    color: StyleConfig.colors.mainText,
    textTransform: "capitalize",
  },
  assignedByAndPriorityOrDoneContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  assignedBy: {
    fontFamily: "Gilroy-Regular",
    fontSize: 14,
    paddingVertical: StyleConfig.width / 50,
  },
  assignedByNameText: {
    fontFamily: "Gilroy-Bold",
    fontSize: 14,
  },
  buttonContainerStyle: {
    marginRight: StyleConfig.width / 20,
    position: "absolute",
    bottom: "40%",
    left: "70%",
  },
  buttonStyle: {
    borderRadius: 20,
    paddingHorizontal: StyleConfig.width / 15,
    backgroundColor: StyleConfig.colors.primaryColor,
  },
  priority: {
    fontFamily: "Gilroy-Regular",
    fontSize: 14,
    paddingVertical: StyleConfig.width / 50,
  },
  priorityTypeText: {
    fontFamily: "Gilroy-Bold",
    fontSize: 14,
  },
});

export default TaskCardItem;
