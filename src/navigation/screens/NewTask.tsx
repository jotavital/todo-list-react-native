import { now } from "moment";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import MaskInput, { Masks } from "react-native-mask-input";
import { useTasks } from "../../contexts/TasksContext";
import { Task } from "../../models/Task";
import { globalStyles } from "../../styles/globalStyles";
import { Button } from "@rneui/base";

export type Props = {
    navigation: any;
};

const NewTaskScreen: React.FC<Props> = ({ navigation }) => {
    const { tasks, setTasks } = useTasks();
    const [titleInvalid, setTitleInvalid] = useState<boolean>(false);
    const [descriptionInvalid, setDescriptionInvalid] =
        useState<boolean>(false);
    const [dateInvalid, setDateInvalid] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [isDataValid, setIsDataValid] = useState<boolean>(false);
    const [showErrors, setShowErrors] = useState<boolean>(false);

    const validateData = () => {
        if (showErrors) {
            setTitleInvalid(title === "");
            setDescriptionInvalid(description === "");
            setDateInvalid(date?.length < 10);
        }

        setIsDataValid(
            title !== "" && description !== "" && !(date.length < 10)
        );

        setShowErrors(true);
    };

    const handleSaveTask = () => {
        validateData();

        if (isDataValid) {
            const newTask: Task = {
                uuid: now(),
                title: title,
                description: description,
                date: date,
                isCompleted: false,
            };

            const newTasksArray = [newTask, ...tasks];

            setTasks(newTasksArray);
            navigation.navigate("Home");
            ToastAndroid.show("Tarefa criada", ToastAndroid.SHORT);
        }
    };

    useEffect(() => {
        validateData();
    }, [title, description, date]);

    return (
        <View style={globalStyles.pageWrapper}>
            <Text style={[globalStyles.h1, globalStyles.textAlignCenter]}>
                Crie uma tarefa
            </Text>
            <View style={{ marginTop: 10 }}>
                <TextInput
                    style={[
                        globalStyles.textInput,
                        titleInvalid ? globalStyles.invalidField : null,
                    ]}
                    onChangeText={(value) => setTitle(value)}
                    placeholder="Título"
                    keyboardType="default"
                />
                <TextInput
                    style={[
                        globalStyles.textInput,
                        descriptionInvalid ? globalStyles.invalidField : null,
                    ]}
                    onChangeText={(value) => setDescription(value)}
                    placeholder="Descrição"
                    keyboardType="default"
                />
                <MaskInput
                    style={[
                        globalStyles.textInput,
                        dateInvalid ? globalStyles.invalidField : null,
                    ]}
                    placeholderFillCharacter="-"
                    value={date}
                    onChangeText={setDate}
                    mask={Masks.DATE_DDMMYYYY}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Salvar"
                    color="green"
                    onPress={() => handleSaveTask()}
                    icon={{
                        name: "check",
                        type: "font-awesome",
                        size: 15,
                        color: "white",
                    }}
                    disabled={!isDataValid}
                />
            </View>
        </View>
    );
};

export default NewTaskScreen;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
});
