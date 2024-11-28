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

    textMeal: {
        color: Colors.white,
        fontSize: 40,
        fontWeight: '600',
    },

    textCategory: {
        color: Colors.white,
    },

    headerInfo: {
        padding: 16,
    }
})

