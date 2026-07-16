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
  boxTop: {
    ...boxBase,
    paddingTop: 200,
    marginBottom: 20,
  },
  boxMid: {
    ...boxBase,
    paddingVertical: 10,
  },
  boxBottom: {
    ...boxBase,
    flex: 1,
    justifyContent: "flex-start",
    marginBottom: 40,
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
    height: 100,
    ...center,
  },
  gradientInner: {
    ...center,
    height: "100%",
    width: "100%",
    flexDirection: "row",
  },
  buttonPatientText: {
    color: "#1800AD",
    fontWeight: "500",
    fontSize: fontScale(16),
  },
  buttonParentText: {
    color: "#F20095",
    fontWeight: "500",
    fontSize: fontScale(16),
  },
  iconPatientImage: {
    width: 70,
    height: 70,
    marginRight: 2,
    resizeMode: "contain",
  },
  iconParentImage: {
    width: 70,
    height: 70,
    marginRight: 12,
    resizeMode: "contain",
  },
});
