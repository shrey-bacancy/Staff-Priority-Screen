import React from "react";
import { FlatList, View } from "react-native";
import { TASK_LIST } from "../../data/dummy_data";

const TaskCardList = ({ id }) => {
  const renderTaskListItem = ({ item }) => {
    if (id === item.id) {
      return (
        <View>
          {item.taskItem}
          {item.taskItem}
          {item.taskItem}
          {item.taskItem}
          {item.taskItem}
          {item.taskItem}
        </View>
      );
    }
  };

  return (
    <FlatList
      data={TASK_LIST}
      renderItem={renderTaskListItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TaskCardList;
