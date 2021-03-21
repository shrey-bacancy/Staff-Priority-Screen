import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ScrollableTabView, {
  ScrollableTabBar,
} from "react-native-scrollable-tab-view";
import StyleConfig from "../constants/StyleConfig";
import { taskAssignedToData } from "../data/dummy_data";
import TaskCardList from "./TaskCardList";

const CustomScrollableTabBar = (props) => {
  return (
    <ScrollableTabView
      style={styles.scrollableTabViewStyle}
      scrollWithoutAnimation
      renderTabBar={() => (
        <ScrollableTabBar
          tabsContainerStyle={styles.scrollableTabBarStyle}
          textStyle={styles.tabBarTextStyle}
          activeTextColor={StyleConfig.colors.primaryColor}
          inactiveTextColor={StyleConfig.colors.mainText}
        />
      )}
      tabBarBackgroundColor={StyleConfig.colors.tabBackground}
      tabBarTextStyle={styles.tabBarTextStyle}
      tabBarPosition="top"
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
    >
      {taskAssignedToData.map((item) => {
        return (
          <ScrollView
            tabLabel={item.name}
            key={item.id}
            style={styles.taskListStyle}
            showsVerticalScrollIndicator={false}
          >
            <TaskCardList id={item.id} />
          </ScrollView>
        );
      })}
    </ScrollableTabView>
  );
};

const styles = StyleSheet.create({
  scrollableTabViewStyle: {
    paddingTop: 30,
  },
  scrollableTabBarStyle: {
    borderBottomWidth: 0,
    paddingHorizontal: 20,
  },
  tabBarTextStyle: {
    fontFamily: StyleConfig.fontGilroyBold,
    fontSize: 14,
  },
  tabBarUnderlineStyle: {
    borderRadius: 40,
    backgroundColor: StyleConfig.colors.primaryColor,
  },
  taskListStyle: {
    marginTop: 30,
  },
});

export default CustomScrollableTabBar;
