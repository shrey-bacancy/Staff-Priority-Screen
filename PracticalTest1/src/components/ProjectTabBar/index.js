import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { ProjectTabItem } from "..";
import { PROJECTS } from "../../data/dummy_data";

const ProjectTabBar = () => {
  const [selectedProjectItem, setSelectedProjectItem] = useState("1");

  const renderProjectTabItem = ({ item }) => {
    return (
      <ProjectTabItem
        id={item.id}
        label={item.label}
        selectedItem={selectedProjectItem}
        onPress={() => {
          setSelectedProjectItem(item.id);
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={PROJECTS}
        renderItem={renderProjectTabItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20 }}
      />
    </View>
  );
};

export default ProjectTabBar;
