import React from "react";
import { View } from "react-native";
import StyleConfig from "../constants/StyleConfig";
import TaskCardItem from "./TaskCardItem";

const TaskCardList = (props) => {
  let renderComponenetForEachTab = [];

  const tasksForEachPerson = (id) => {
    switch (id) {
      case "1":
        renderComponenetForEachTab = [];

        for (let i = 0; i < 7; i++) {
          renderComponenetForEachTab.push(
            <TaskCardItem
              key={id + i.toString()}
              taskTime="2h"
              status="Due"
              deadlineTime="2 days"
              priorityType="High"
              assignedByName="Sarah H."
            />
          );
        }

        return (
          <View style={{ width: StyleConfig.width }}>
            {renderComponenetForEachTab}
          </View>
        );

      case "2":
        renderComponenetForEachTab = [];

        for (let i = 0; i < 7; i++) {
          renderComponenetForEachTab.push(
            <TaskCardItem
              key={id + i.toString()}
              taskTime="3:50"
              status="Working"
              iconClockShow={true}
              priorityType="Normal"
              assignedByName="Sarah H."
            />
          );
        }

        return (
          <View style={{ width: StyleConfig.width }}>
            {renderComponenetForEachTab}
          </View>
        );
      case "3":
        renderComponenetForEachTab = [];

        for (let i = 0; i < 7; i++) {
          renderComponenetForEachTab.push(
            <TaskCardItem
              key={id + i.toString()}
              taskTime="1:30/2h"
              taskDone={true}
              assignedByName="You"
            />
          );
        }

        return (
          <View style={{ width: StyleConfig.width }}>
            {renderComponenetForEachTab}
          </View>
        );

      case "4":
        renderComponenetForEachTab = [];

        for (let i = 0; i < 7; i++) {
          renderComponenetForEachTab.push(
            <TaskCardItem
              key={id + i.toString()}
              taskTime="2:30/2h"
              taskDone={true}
              isLate={true}
            />
          );
        }

        return (
          <View style={{ width: StyleConfig.width }}>
            {renderComponenetForEachTab}
          </View>
        );

      case "5":
        renderComponenetForEachTab = [];

        for (let i = 0; i < 7; i++) {
          renderComponenetForEachTab.push(
            <TaskCardItem
              key={id + i.toString()}
              taskTime="1:50"
              status="Working"
              iconClockShow={true}
              priorityType="High"
              assignedByName="You"
            />
          );
        }

        return (
          <View style={{ width: StyleConfig.width }}>
            {renderComponenetForEachTab}
          </View>
        );
      case "6":
        renderComponenetForEachTab = [];

        for (let i = 0; i < 7; i++) {
          renderComponenetForEachTab.push(
            <TaskCardItem
              key={id + i.toString()}
              taskTime="6h"
              status="Due"
              deadlineTime="10 days"
              priorityType="Normal"
              assignedByName="Trevor M."
            />
          );
        }

        return (
          <View style={{ width: StyleConfig.width }}>
            {renderComponenetForEachTab}
          </View>
        );
    }
  };

  return <>{tasksForEachPerson(props.id)}</>;
};

export default TaskCardList;
