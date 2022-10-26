import { Button } from "react-native";

export default function ProfileScreen({ navigation }) {
    return (
        <Button
            title="Go tohome"
            onPress={() => navigation.navigate("Home")}
        />
    );
}
