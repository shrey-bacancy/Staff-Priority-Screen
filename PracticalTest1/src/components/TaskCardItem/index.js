import React from "react";
import { TouchableNativeFeedback, useColorScheme, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { DefaultText } from "..";
import Strings from "../../constants/Strings";
import StyleConfig from "../../constants/StyleConfig";
import styles from "./styles";

const TaskCardItem = (props) => {
  const isDarkMode = useColorScheme() === "dark";

  const colorSchemeDarkAndLightMode = isDarkMode
    ? StyleConfig.colors.white
    : StyleConfig.colors.black;

  let statusStyle;

  if (props.status === "Working") {
    statusStyle = styles().workingStatus;
  }

  let colorSchemePriority;

  if (props.priorityType === "Normal") {
    colorSchemePriority = styles().priorityNormalText;
  }

  let colorSchemeTimeToCompleteTask;

  if (props.isLate) {
    colorSchemeTimeToCompleteTask = styles().timeToCompleteTaskLate;
  }

  return (
    <View style={styles().itemContainer}>
      <View style={styles().taskItemContainer}>
        <TouchableNativeFeedback>
          <View style={styles().taskDetailsContainer}>
            <View style={styles().taskAndProjectNameContainer}>
              <DefaultText
                textStyle={styles(colorSchemeDarkAndLightMode).taskName}
              >
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
                    size={28}
                    color={colorSchemeDarkAndLightMode}
                  />
                )}
                {props.taskDone && (
                  <Icon
                    name={Strings.TaskCardItem.checkIconName}
                    type={Strings.TaskCardItem.checkIconType}
                    size={28}
                    color={StyleConfig.colors.taskCompleteIcon}
                  />
                )}
                <DefaultText
                  textStyle={{
                    ...styles(colorSchemeDarkAndLightMode).timeToCompleteTask,
                    ...colorSchemeTimeToCompleteTask,
                  }}
                >
                  {props.taskTime}
                </DefaultText>
              </View>
              {props.taskDone === false || props.taskDone === undefined ? (
                <DefaultText
                  textStyle={{
                    ...styles().deadlineStatus,
                    ...statusStyle,
                  }}
                >
                  {props.status}{" "}
                  {props.status === "Due" ? `in ${props.deadlineTime}` : null}
                </DefaultText>
              ) : null}
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>

      <View style={styles().assignedByAndPriorityOrDoneButtonContainer}>
        <DefaultText textStyle={styles(colorSchemeDarkAndLightMode).assignedBy}>
          {props.assignedByName && (
            <DefaultText textStyle={styles().assignedByText}>
              {Strings.TaskCardItem.assignedByText}
            </DefaultText>
          )}
          <DefaultText
            textStyle={styles(colorSchemeDarkAndLightMode).assignedByNameText}
          >
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
          <DefaultText textStyle={styles().priority}>
            {Strings.TaskCardItem.priorityText}
            <DefaultText
              textStyle={{
                ...styles().priorityHighText,
                ...colorSchemePriority,
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

export default TaskCardItem;
