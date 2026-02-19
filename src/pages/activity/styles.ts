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
    height: 50
  },
  boxMid: {
    ...boxBase,
    height: 50,
    marginBottom: 40
  },
  boxBottom: {
    ...boxBase,
    height: 300,
    justifyContent: "flex-end"
  },
  footer: {
    height: 100,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 40 
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
    height: 90,
    ...center,
  },
   continueButton: {
    borderRadius: 35,
    overflow: "hidden",
    width: "60%",
    height: 60,
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
    fontSize: 24,
  },
  buttonAromatherapyText: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 24,
    marginLeft: 70,
  },
   buttonMeditationText: {
    color: "#3CD691",
    fontWeight: "400",
    fontSize: 24,
    marginLeft: 30,
  },
  continueButtonText: {
    color: "white",
    fontSize: 24
  },
  iconPatientImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    position: "absolute",
    left: 20,
  },
   iconParentImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    position: "absolute",
    left: 20,
  },
});
