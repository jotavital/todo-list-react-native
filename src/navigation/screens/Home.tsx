import React, { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useTasks } from "../../contexts/TasksContext";
import { globalStyles } from "../../styles/globalStyles";
import { Card } from "@rneui/base";
import { Task } from "../../models/Task";
import { Icon } from "@rneui/themed";
import NewTaskButton from "../../components/NewTaskButton";

interface Props {
    navigation: any;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const { tasks, handleDeleteTask, handleCompleteTask } = useTasks();

    return (
        <ScrollView style={globalStyles.pageWrapper}>
            {tasks && tasks.length > 0 ? (
                <>
                    <View>
                        <NewTaskButton
                            onPress={() => navigation.navigate("NewTask")}
                        />
                    </View>

                    {tasks.map((task: Task) => {
                        return (
                            <Card>
                                <View style={styles.cardContainer}>
                                    <View style={{ width: 250 }}>
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: 17,
                                            }}
                                        >
                                            {task.title}
                                        </Text>
                                        <Text>{task.description}</Text>
                                        <Text>{task.date}</Text>
                                    </View>
                                    <View
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            width: 60,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Pressable
                                            onPress={() =>
                                                handleCompleteTask(task.uuid)
                                            }
                                            style={{ marginRight: 10 }}
                                        >
                                            <Icon
                                                name={
                                                    task.isCompleted
                                                        ? "check-circle"
                                                        : "check-circle-outline"
                                                }
                                                color={
                                                    task.isCompleted
                                                        ? "green"
                                                        : "gray"
                                                }
                                                size={30}
                                            />
                                        </Pressable>
                                        <Pressable
                                            onPress={() =>
                                                handleDeleteTask(task.uuid)
                                            }
                                        >
                                            <Icon
                                                name="delete"
                                                color="#dc3545"
                                                size={30}
                                            />
                                        </Pressable>
                                    </View>
                                </View>
                            </Card>
                        );
                    })}
                </>
            ) : (
                <>
                    <View>
                        <View style={styles.emptyContainer}>
                            <Text
                                style={[
                                    globalStyles.h2,
                                    globalStyles.textAlignCenter,
                                ]}
                            >
                                Nenhum registro encontrado
                            </Text>
                            <Text style={globalStyles.textAlignCenter}>
                                Cadastre tarefas no botão abaixo
                            </Text>
                        </View>
                    </View>
                    <NewTaskButton
                        onPress={() => navigation.navigate("NewTask")}
                    />
                </>
            )}
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    emptyContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
    },
});
