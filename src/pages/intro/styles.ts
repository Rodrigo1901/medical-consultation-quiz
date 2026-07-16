import { StyleSheet } from "react-native";
import { fontScale } from "../../utils/typography";

const center = { alignItems: "center", justifyContent: "center" } as const;
const boxBase = {
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
} as const;
const textBase = { alignSelf: "flex-start", marginHorizontal: 50 } as const;

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
  logo: {
    width: 300,
    height: 280,
  },
  boxTop: {
    ...boxBase,
    height: 250,
    marginBottom: 50,
  },
  boxMid: {
    ...boxBase,
    height: 100,
    marginBottom: 30,
  },
  boxBottom: {
    ...boxBase,
    height: 100,
  },
  text: {
    ...textBase,
    fontSize: fontScale(18),
    textAlign: "center",
    color: "#715CF8",
    marginTop: 10,
  },
  gradientButton: {
    borderRadius: 35,
    overflow: "hidden",
    width: "50%",
    height: 70,
    ...center,
  },
  gradientInner: {
    ...center,
    height: "100%",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: fontScale(24),
    fontWeight: "bold",
  },
});
