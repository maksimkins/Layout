import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";
;

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
        lineHeight: 40,
    },

    textCategory: {
        color: Colors.white,
    },

    headerInfo: {
        padding: 16,
        borderTopWidth: 4,
        borderTopColor: Colors.yellow,
    },

    link: {
        textDecorationLine:'underline',
        color: Colors.blue,

    },

    linkButton: {
        padding: 16,
    },

    instructions: {
        padding: 16,
    },

    textInstructions: {
        color: Colors.white,
    },

    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },

    textTags: {
        color: Colors.blue,
    },
})

