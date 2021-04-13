import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default {
  width,
  height,

  colors: {
    white: "#FFFFFF",
    black: "#000000",
    mainHeading: "#111119",
    primaryColor: "#E3512C",
    mainText: "#8D99B1",
    outline: "#D3D4D6",
    taskCompleteIcon: "#32CE61",
    priorityNormal: "#EB9D31",
    priorityHigh: "red",
    taskTitleAndAssignedNameAndTime: "#404354",
    workingStatus: "#DE9898",
    lateText: "#EF5555",
    tabBackground: "#F0F0F0",
    inactiveTabBackground: "#DCE7EB",
  },

  fontGilroyRegular: "Gilroy-Regular",
  fontGilroyBold: "Gilroy-Bold",
  fontGilroyBlack: "Gilroy-Black",
};
