import React, { useState } from "react";
import {
  Animated,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import StyleConfig from "../constants/StyleConfig";
import ProjectTabItem from "../components/ProjectTabItem";
import TaskCardList from "../components/TaskCardList";
import ScrollableTabView, {
  ScrollableTabBar,
} from "react-native-scrollable-tab-view";

const StaffPriorityScreen = (props) => {
  const isDarkMode = useColorScheme() === "dark";
  const colorSchemeDarkAndLightMode = isDarkMode
    ? StyleConfig.colors.white
    : StyleConfig.colors.black;

  const [selectedProjectItem, setSelectedProjectItem] = useState("1");

  const projectData = [
    { id: "1", label: "All" },
    { id: "2", label: "Project One" },
    { id: "3", label: "Project Two" },
    { id: "4", label: "Project Three" },
  ];

  const taskAssignedToData = [
    { id: "1", name: "All" },
    { id: "2", name: "Marian" },
    { id: "3", name: "Robert" },
    { id: "4", name: "Pamela" },
    { id: "5", name: "Willie" },
    { id: "6", name: "Maximillian" },
    { id: "7", name: "Sky" },
    { id: "8", name: "Jack" },
  ];

  const renderProjectTabItem = (itemData) => {
    return (
      <ProjectTabItem
        itemData={itemData}
        selectedItem={selectedProjectItem}
        onPress={() => {
          setSelectedProjectItem(itemData.item.id);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              ...styles.headingText,
              ...{
                color: colorSchemeDarkAndLightMode,
              },
            }}
          >
            My Staff:
          </Text>
          <Text style={styles.subHeadingText}>Priority List</Text>
        </View>
        <FontAwesome
          name="sort-amount-asc"
          size={28}
          color={StyleConfig.colors.primaryColor}
        />
      </View>
      <View>
        <FlatList
          extraData={selectedProjectItem}
          data={projectData}
          renderItem={renderProjectTabItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: StyleConfig.width / 20 }}
        />
      </View>
      <ScrollableTabView
        style={{ paddingTop: StyleConfig.height / 30 }}
        scrollWithoutAnimation
        renderTabBar={() => (
          <ScrollableTabBar
            scrollValue={() => {
              Animated.Value(1);
            }}
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
              removeClippedSubviews
              tabLabel={item.name}
              key={item.id}
              style={{ marginTop: StyleConfig.height / 30 }}
              showsVerticalScrollIndicator={false}
            >
              <TaskCardList />
            </ScrollView>
          );
        })}
      </ScrollableTabView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: StyleConfig.width / 20,
    paddingVertical: StyleConfig.height / 30,
  },
  headingText: {
    textTransform: "uppercase",
    fontFamily: "Gilroy-Black",
    fontSize: 24,
    letterSpacing: 2,
  },
  subHeadingText: {
    fontFamily: "Gilroy-Bold",
    fontSize: 18,
    letterSpacing: 2.5,
    color: StyleConfig.colors.mainText,
  },
  scrollableTabBarStyle: {
    borderBottomWidth: 0,
    paddingHorizontal: StyleConfig.width / 20,
  },
  tabBarTextStyle: {
    fontFamily: "Gilroy-Bold",
    fontSize: 14,
  },
  tabBarUnderlineStyle: {
    borderRadius: 40,
    backgroundColor: StyleConfig.colors.primaryColor,
  },
});

export default StaffPriorityScreen;
