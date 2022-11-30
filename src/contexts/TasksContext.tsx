import { createContext, useContext, useState } from "react";
import { ToastAndroid } from "react-native";
import { Task } from "../models/Task";

interface TasksContextData {
    tasks: Task[];
    setTasks: (task: Task[]) => void;
    handleDeleteTask: (uuid: number) => void;
    handleCompleteTask: (uuid: number) => void;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export const TasksProvider = ({ children }: any) => {
    const [tasks, setTasks] = useState<Task[]>([
        {
            uuid: 12,
            title: "legalzinn",
            description: "topppp",
            date: "21/07/2022",
            isCompleted: false,
        },
    ]);

    const handleDeleteTask = (uuid: number) => {
        const newTasks = tasks.filter((task) => {
            return task.uuid !== uuid;
        });

        setTasks(newTasks);
        ToastAndroid.show("Tarefa excluída", ToastAndroid.SHORT);
    };

    const handleCompleteTask = (uuid: number) => {
        const taskIndex = tasks.findIndex((task: Task) => task.uuid === uuid);
        const tempTasks = tasks;

        tempTasks[taskIndex].isCompleted = !tempTasks[taskIndex].isCompleted;

        setTasks([...tempTasks]);
        ToastAndroid.show(
            !tempTasks[taskIndex].isCompleted
                ? "Tarefa pendente"
                : "Tarefa concluída",
            ToastAndroid.SHORT
        );
    };

    return (
        <TasksContext.Provider
            value={{
                tasks,
                setTasks,
                handleDeleteTask,
                handleCompleteTask,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export const useTasks = () => {
    return useContext(TasksContext);
};
