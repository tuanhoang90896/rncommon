import { useNavigation } from '@react-navigation/native';
import { Alert } from "react-native";

export const useHome = (props) => {
    const navigation = useNavigation();

    const createAction = () => {
        console.log('action')
    };

    const openTueDemo = () => {
        navigation.navigate('TueDev')
    };
    
    return {
        createAction, 
        openTueDemo
    };
};
