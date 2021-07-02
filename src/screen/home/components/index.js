import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import DemoAlert from "../../common/alert/components";
import { useHome } from "../actions/useHome";

const HomePage = (props) => {
    const navigation = useNavigation();
    const { route } = props;
    const { createAction, openTueDemo } = useHome();

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <DemoAlert />
            <View style={{ padding: 16 }}>
                <Button
                    onPress={() => {
                        openTueDemo();
                    }}
                    buttonStyle={{ width: '100%' }}
                    title="Tuệ Dev"
                    type="outline"
                />
            </View>
        </View>
    );
};

export default HomePage;
