import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    zIndex: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },

  head: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    borderTopColor: "white",
    borderBottomColor: "white",
    borderWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: 8,
  },

  main: {
    width: "100%",
    maxWidth: "800px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderColor: "white",
    borderWidth: 0.8,
    marginTop: 30,
    textAlign: "center",
  },

  description: {
    borderStyle: "solid",
    borderBottomColor: "white",
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 30,
    paddingBottom: 30,
  },
});

const caseStyles = StyleSheet.create({
  cases: {
    width: "100%",
    backgroundColor: "black",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  case: {
    width: "50%",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  caseImage: {
    width: 150,
    height: 130,
  },

  caseName: {
    backgroundColor: "white",
    color: "black",
    padding: 10,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 12,
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 10,
  },
});

export { styles, caseStyles };
