import React from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { Icon } from "react-native-elements";
import StyleConfig from "../constants/StyleConfig";
import Strings from "../constants/Strings";
import ProjectTabBar from "../components/ProjectsTabBar";
import DefaultText from "../components/DefaultText";
import CustomScrollableTabBar from "../components/CustomScrollableTabBar";

const StaffPriorityScreen = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View style={styles().containerStyleCommon}>
      <View style={styles().headerContainer}>
        <View style={styles().containerStyleCommon}>
          <DefaultText textStyle={styles(isDarkMode).headingText}>
            {Strings.StaffPriorityScreen.mainHeading}
          </DefaultText>
          <DefaultText textStyle={styles().subHeadingText}>
            {Strings.StaffPriorityScreen.subHeading}
          </DefaultText>
        </View>
        <Icon
          name={Strings.StaffPriorityScreen.sortIconName}
          type={Strings.StaffPriorityScreen.sortIconType}
          size={28}
          color={StyleConfig.colors.primaryColor}
        />
      </View>
      <ProjectTabBar />
      <CustomScrollableTabBar />
    </View>
  );
};

const styles = (isDarkMode) =>
  StyleSheet.create({
    containerStyleCommon: {
      flex: 1,
    },
    headerContainer: {
      flexDirection: "row",
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    headingText: {
      textTransform: "uppercase",
      fontFamily: StyleConfig.fontGilroyBlack,
      fontSize: 24,
      letterSpacing: 2,
      color: isDarkMode ? StyleConfig.colors.white : StyleConfig.colors.black,
    },
    subHeadingText: {
      fontSize: 18,
      letterSpacing: 2.5,
    },
  });

export default StaffPriorityScreen;
