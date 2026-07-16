import { StyleSheet } from "react-native";
import { fontScale } from "../../utils/typography";

const center = { alignItems: "center", justifyContent: "center" } as const;
const boxBase = {
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
} as const;
const textBase = { alignSelf: "center", marginHorizontal: 50 } as const;

export default StyleSheet.create({
  container: {
    flex: 1,
    ...center,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: fontScale(30),
    fontWeight: "bold",
    textAlign: "center",
    color: "#1800AD",
    marginBottom: 10,
  },
  header: {
    paddingTop: 70,
    marginLeft: 20,
  },
  boxTop: {
    ...boxBase,
    paddingTop: 30,
  },
  boxMid: {
    ...boxBase,
    paddingVertical: 10,
    marginBottom: 10,
  },
  boxBottom: {
    ...boxBase,
    flex: 1,
    justifyContent: "flex-start",
  },
  text: {
    ...textBase,
    fontSize: fontScale(20),
    textAlign: "center",
    color: "#715CF8",
  },
  gradientButton: {
    borderRadius: 20,
    overflow: "hidden",
    width: "80%",
    height: 90,
    ...center,
  },
  gradientInner: {
    ...center,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonReikiText: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: fontScale(24),
  },
  buttonAromatherapyText: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: fontScale(24),
    marginLeft: 70,
  },
  buttonMeditationText: {
    color: "#3CD691",
    fontWeight: "400",
    fontSize: fontScale(24),
    marginLeft: 30,
  },
  buttonYogaText: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: fontScale(24),
  },
  iconImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    position: "absolute",
    left: 20,
  },
});
