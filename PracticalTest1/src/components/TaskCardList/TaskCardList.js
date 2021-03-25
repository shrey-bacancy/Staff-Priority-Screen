import React from "react";
import { FlatList, View } from "react-native";
import { taskList } from "../../data/dummy_data";

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
      data={taskList}
      renderItem={renderTaskListItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TaskCardList;
