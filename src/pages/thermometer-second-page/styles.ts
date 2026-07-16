import { StyleSheet } from "react-native";
import { fontScale } from "../../utils/typography";

const center = { alignItems: "center", justifyContent: "flex-start" } as const;
const boxBase = {
  width: "100%",
  alignItems: "center",
  justifyContent: "flex-start",
} as const;

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
  header: {
    paddingTop: 70,
    marginLeft: 20,
  },
  boxMid: {
    ...boxBase,
    flex: 1,
    paddingVertical: 10,
  },
  boxBottom: {
    ...boxBase,
    justifyContent: "flex-start",
    paddingBottom: 90,
  },
  progressLabel: {
    alignSelf: "flex-start",
    marginLeft: 40,
    color: "#7A6CFF",
    marginBottom: 8,
    fontSize: fontScale(18),
  },
  progressOuter: {
    width: "80%",
    height: 12,
    backgroundColor: "#FFEAF6",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
  },
  progressInner: {
    width: "70%",
    height: "100%",
    backgroundColor: "#FF69B4",
  },
  gradientButton: {
    borderRadius: 30,
    overflow: "hidden",
    width: "50%",
    height: 55,
    ...center,
  },
  gradientInner: {
    ...center,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    color: "white",
    fontSize: fontScale(22),
    fontWeight: "bold",
  },
});
