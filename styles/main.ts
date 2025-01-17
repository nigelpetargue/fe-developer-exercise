import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  field: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 10,
    marginHorizontal: 10,
    zIndex: 9999,
  },
  button: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#6c63ff",
    height: "100%",
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#6c63ff",
    borderWidth: 1,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#4b5563",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtext: {
    color: "#4b5563",
    marginTop: 5,
    marginBottom: 100,
  },
})
