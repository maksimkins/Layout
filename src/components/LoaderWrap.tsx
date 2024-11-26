import LottieView from "lottie-react-native";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Colors } from "../utils/colors";

interface Props extends React.PropsWithChildren {
    isLoading: boolean;
}

export const LoaderWrap: React.FC<Props> = ({children, isLoading}) => {
    return (
        <View style={styles.container}>
            {isLoading ? 
                <LottieView
                    source={require("../assets/lottie/loading.json")}
                    style={styles.lottie}
                    autoPlay
                    loop/> 
                : children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: Colors.primeBlack,
    },

    lottie: {
        width: Dimensions.get('window').width / 2, 
        height: Dimensions.get('window').width / 2,
    }

})