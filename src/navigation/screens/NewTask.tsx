import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Datepicker from "../../components/Datepicker";

export type Props = {
    navigation: any;
};

const NewTaskScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <>
            <Text>form de nova tarefa vai ficar aqui</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(value) => console.log(value)}
                placeholder="Título"
                keyboardType="default"
            />
            <TextInput
                style={styles.textInput}
                onChangeText={(value) => console.log(value)}
                placeholder="Descrição"
                keyboardType="default"
            />
            <View>
                <Datepicker />
            </View>
        </>
    );
};

export default NewTaskScreen;

const styles = StyleSheet.create({
    textInput: {
        margin: 10,
        borderColor: "#111",
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
});
