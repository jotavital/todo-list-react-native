import React from "react";
import { View } from "react-native";
import { Button } from "@rneui/base";
import { globalStyles } from "../styles/globalStyles";

interface Props {
    onPress: any;
}

const NewTaskButton: React.FC<Props> = ({ onPress = null }) => {
    return (
        <View style={globalStyles.justifyContentCenter}>
            <Button
                title="Nova tarefa"
                onPress={onPress}
                icon={{
                    name: "plus",
                    type: "font-awesome",
                    size: 15,
                    color: "white",
                }}
            />
        </View>
    );
};

export default NewTaskButton;
