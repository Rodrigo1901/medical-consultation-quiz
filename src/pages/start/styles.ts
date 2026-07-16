import { StyleSheet } from "react-native";
import { fontScale } from "../../utils/typography";

const center = { alignItems: "center", justifyContent: "center" } as const;
const boxBase = {
  width: "100%",
  alignItems: "center",
  justifyContent: "flex-start",
} as const;
const inputBase = {
  borderWidth: 2,
  borderColor: "#FF69B4",
  borderRadius: 20,
  width: "80%",
  paddingHorizontal: 10,
  marginVertical: 5,
} as const;
const textBase = { alignSelf: "flex-start", marginLeft: 50 } as const;

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
    width: 250,
    height: 230,
  },
  boxTop: {
    ...boxBase,
    flex: 1,
    justifyContent: "center",
    paddingTop: 150,
  },
  boxMid: {
    ...boxBase,
    flex: 1.5,
    justifyContent: "center",
    paddingTop: 80,
  },
  boxBottom: {
    ...boxBase,
    flex: 1,
    justifyContent: "center",
    paddingBottom: 100,
  },
  text: {
    ...textBase,
    fontSize: fontScale(14),
    color: "#00000080",
    marginTop: 10,
  },
  textInput: {
    ...inputBase,
    height: 40,
    borderRadius: 20,
  },
  datePressable: {
    width: "80%",
    alignItems: "center",
  },
  dateInput: {
    ...inputBase,
    borderRadius: 28,
    width: "100%",
    height: 42,
    paddingHorizontal: 16,
    justifyContent: "center",
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
    height: "100%",
    width: "100%",
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    color: "white",
    fontSize: fontScale(20),
    fontWeight: "bold",
  },
});
