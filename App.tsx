import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/navigation/screens/Home";
import NewTaskScreen from "./src/navigation/screens/NewTask";
import "expo-dev-client";
import { TasksProvider } from "./src/contexts/TasksContext";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <TasksProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: "Minhas tarefas" }}
                    />
                    <Stack.Screen
                        name="NewTask"
                        component={NewTaskScreen}
                        options={{ title: "Criar tarefa" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </TasksProvider>
    );
}
