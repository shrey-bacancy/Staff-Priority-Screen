import React from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import StyleConfig from "../constants/StyleConfig";
import ProjectTabBar from "../components/ProjectsTabBar";
import DefaultText from "../components/DefaultText";
import CustomScrollableTabBar from "../components/CustomScrollableTabBar";

const StaffPriorityScreen = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView style={styles().containerStyleCommon}>
      <View style={styles().headerContainer}>
        <View style={styles().containerStyleCommon}>
          <DefaultText textStyle={styles(isDarkMode).headingText}>
            My Staff:
          </DefaultText>
          <DefaultText textStyle={styles().subHeadingText}>
            Priority List
          </DefaultText>
        </View>
        <Icon
          name="sort-amount-asc"
          type="font-awesome"
          size={28}
          color={StyleConfig.colors.primaryColor}
        />
      </View>
      <ProjectTabBar />
      <CustomScrollableTabBar />
    </SafeAreaView>
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
      fontFamily: "Gilroy-Black",
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
