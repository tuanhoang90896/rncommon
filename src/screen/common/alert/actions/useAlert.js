import { useNavigation } from '@react-navigation/native';
import { Alert } from "react-native";

export const useAlert = (props) => {
    const navigation = useNavigation();

    const createTwoButtonAlert = () =>
        Alert.alert(
            "Title",
            "Test Alert",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    const showAlert = () => {
        createTwoButtonAlert();
    };

    return {
        showAlert
    };
};
