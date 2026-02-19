import { StyleSheet } from "react-native";

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
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1800AD",
    marginBottom: 10,
  },
  boxTop: {
    ...boxBase,
    height: 50,
    marginBottom: 20,
  },
  boxMid: {
    ...boxBase,
    height: 50
  },
  boxBottom: {
    ...boxBase,
    height: 300,
    marginBottom: 100,
  },
  text: {
    ...textBase,
    fontSize: 20,
    textAlign: "center",
    color: "#715CF8"
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
    fontSize: 16,
  },
  buttonParentText: {
    color: "#F20095",
    fontWeight: "500",
    fontSize: 16,
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
