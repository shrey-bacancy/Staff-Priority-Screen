import React from "react";
import { useColorScheme, View } from "react-native";
import { Icon } from "react-native-elements";
import StyleConfig from "../../constants/StyleConfig";
import Strings from "../../constants/Strings";
import styles from "./styles";
import {
  CustomScrollableTabBar,
  DefaultText,
  ProjectTabBar,
} from "../../components";

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

export default StaffPriorityScreen;
