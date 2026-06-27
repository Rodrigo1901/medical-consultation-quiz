import { StyleSheet } from "react-native";

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
    height: 60,
    marginLeft: 20,
    marginBottom: 40,
  },
  boxTop: {
    ...boxBase,
    height: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    color: "#826FF9",
  },
  boxMid: {
    ...boxBase,
    height: 400,
    marginTop: 10,
  },
  boxBottom: {
    ...boxBase,
    height: 100,
    justifyContent: "center",
  },
  progressLabel: {
    alignSelf: "flex-start",
    marginLeft: 40,
    color: "#7A6CFF",
    marginBottom: 8,
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
    width: "35%",
    height: "100%",
    backgroundColor: "#FF69B4",
  },
  card: {
    width: "85%",
    height: 150,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#6149FB",
    marginBottom: 12,
  },
  facesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  sliderFacesRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    width: "100%",
    paddingHorizontal: 10,
  },
  faceImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  sliderFaceImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  facePress: {
    alignItems: "center",
    paddingVertical: 2,
  },
  facePressSelected: {
    alignItems: "center",
    paddingVertical: 2,
    backgroundColor: "rgba(255,105,180,0.12)",
    borderRadius: 12,
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
    fontSize: 22,
    fontWeight: "bold",
  },
  sliderRow: {
    flexDirection: "row",
  },
  sliderValueText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#826FF9",
    marginTop: 6
  },
});
