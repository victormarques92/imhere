import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
    textAlign: "center",
    paddingHorizontal: 50,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 16,
    fontSize: 18,
    flex: 1,
  },
  buttonText: {
    color: "#FDFCFE",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.4,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    marginTop: 36,
    marginBottom: 40,
  },
  listEmptyText: {
    color: "#FDFCFE",
    fontSize: 14,
    textAlign: "center",
  },
});
