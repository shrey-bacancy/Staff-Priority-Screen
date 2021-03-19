import React from "react";
import { View } from "react-native";
import StyleConfig from "../constants/StyleConfig";
import TaskCardItem from "./TaskCardItem";

const TaskCardList = (props) => {
  return (
    <View style={{ width: StyleConfig.width }}>
      <TaskCardItem
        taskTime="2h"
        status="Due"
        deadlineTime="2 days"
        priorityType="high"
        assignedByName="Sarah H."
      />
      <TaskCardItem
        taskTime="3:50"
        status="working"
        iconClockShow={true}
        priorityType="normal"
        assignedByName="Sarah H."
      />
      <TaskCardItem taskTime="1:30/2h" taskDone={true} assignedByName="You" />
      <TaskCardItem taskTime="2:30/2h" taskDone={true} isLate={true} />
      <TaskCardItem
        taskTime="2h"
        status="Due"
        deadlineTime="2 days"
        priorityType="high"
        assignedByName="Sarah H."
      />
      <TaskCardItem
        taskTime="3:50"
        status="working"
        iconClockShow={true}
        priorityType="normal"
        assignedByName="Sarah H."
      />
      <TaskCardItem taskTime="1:30/2h" taskDone={true} assignedByName="You" />
      <TaskCardItem taskTime="2:30/2h" taskDone={true} isLate={true} />
    </View>
  );
};

export default TaskCardList;
