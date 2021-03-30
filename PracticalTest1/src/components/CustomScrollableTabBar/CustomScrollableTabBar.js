import React from "react";
import { View } from "react-native";
import ScrollableTabView, {
  ScrollableTabBar,
} from "react-native-scrollable-tab-view";
import { TaskCardList } from "..";
import StyleConfig from "../../constants/StyleConfig";
import { taskAssignedToData } from "../../data/dummy_data";
import styles from "./styles";

const CustomScrollableTabBar = () => {
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
          <View tabLabel={item.name} key={item.id} style={styles.taskListStyle}>
            <TaskCardList id={item.id} />
          </View>
        );
      })}
    </ScrollableTabView>
  );
};

export default CustomScrollableTabBar;
