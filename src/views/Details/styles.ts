import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    list: {
        flex: 1,
    },

    listContent: {
        flexGrow: 1,
    },

    image: {
        height: Dimensions.get('window').height * 3 / 10,
        width: Dimensions.get('window').width,
    },
})

