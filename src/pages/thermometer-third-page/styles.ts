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
    height: 30,
    marginLeft: 20,
    marginBottom: 40,
  },
  boxMid: {
    ...boxBase,
    height: 550,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  title: {
    fontSize: 24,
    color: "#740390",
  },
   card: {
    flexDirection: 'column',
    width: "85%",
    height: 350,
    backgroundColor: "#fdd4ed86",
    borderRadius: 30,
    alignItems: "center",
    marginTop: 80,
  },
   input: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 30,
    paddingHorizontal: 20,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 18,
    width: '100%',
    height: '100%',
    flex: 1,
    flexGrow: 1,
  },
  boxBottom: {
    ...boxBase,
    height: 80,
    justifyContent: "flex-start",
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
    width: "100%",
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
    fontSize: 22,
    fontWeight: "bold",
  },
});
