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
  title: {
    fontSize: fontScale(24),
    color: "#740390",
  },
  card: {
    flexDirection: "column",
    width: "85%",
    minHeight: 380,
    backgroundColor: "#fdd4ed86",
    borderRadius: 30,
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 10,
  },
  cardTitle: {
    fontSize: fontScale(18),
    marginTop: 10,
    fontWeight: "bold",
    color: "#740390",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 30,
    marginVertical: 20,
    paddingHorizontal: 20,
    textAlignVertical: "top",
    backgroundColor: "#fff",
    color: "#740390",
    fontSize: fontScale(18),
    width: "90%",
    minHeight: 180,
    flex: 1,
    flexGrow: 1,
  },
  boxBottom: {
    ...boxBase,
    paddingBottom: 100,
    justifyContent: "flex-start",
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
    fontSize: fontScale(22),
    fontWeight: "bold",
  },
});
