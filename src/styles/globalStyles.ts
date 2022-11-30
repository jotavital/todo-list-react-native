import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    textInput: {
        margin: 10,
        borderColor: "#111",
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    h1: {
        fontSize: 30,
    },
    h2: {
        fontSize: 20,
    },
    invalidField: {
        borderBottomColor: "red",
        backgroundColor: "#f8ad9d",
    },
    textAlignCenter: {
        textAlign: "center",
    },
    pageWrapper: {
        padding: 20,
    },
    justifyContentCenter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
});
