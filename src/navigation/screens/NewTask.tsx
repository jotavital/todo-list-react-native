import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Datepicker from "../../components/Datepicker";

export type Props = {
    navigation: any;
};

const NewTaskScreen: React.FC<Props> = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const handleSetDate = (value: Date) => {
        setDate(value);
    };
    const [titleInvalid, setTitleInvalid] = useState<boolean>(false);
    const [descriptionInvalid, setDescriptionInvalid] =
        useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleSaveTask = () => {
        console.log(date);
        let validated = false;

        setTitleInvalid(title === "");
        setDescriptionInvalid(description === "");

        if (title !== "" && description !== "") {
            validated = true;
        }

        if (validated) {
            navigation.navigate("Home");
        }
    };

    return (
        <>
            <Text style={styles.h1}>Crie uma tarefa</Text>
            <TextInput
                style={[
                    styles.textInput,
                    titleInvalid ? styles.invalidField : null,
                ]}
                onChangeText={(value) => setTitle(value)}
                placeholder="Título"
                keyboardType="default"
            />
            <TextInput
                style={[
                    styles.textInput,
                    descriptionInvalid ? styles.invalidField : null,
                ]}
                onChangeText={(value) => setDescription(value)}
                placeholder="Descrição"
                keyboardType="default"
            />
            <View style={{ width: "100%" }}>
                <Text style={styles.h2}>Prazo</Text>
                <Datepicker date={date} handleSetDate={handleSetDate} />
            </View>
            <View style={styles.button}>
                <Button
                    title="Salvar"
                    color="green"
                    onPress={() => handleSaveTask()}
                />
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
    h1: {
        fontSize: 30,
        padding: 20,
        textAlign: "center",
    },
    h2: {
        fontSize: 20,
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        padding: 20,
    },
    invalidField: {
        borderBottomColor: "red",
        backgroundColor: "#f8ad9d",
    },
});
