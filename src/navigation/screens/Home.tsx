import React from "react";
import { Button, StyleSheet, View } from "react-native";

interface Props {
    navigation: any;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Nova tarefa"
                onPress={() => navigation.navigate("NewTask", { name: "Jane" })}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
