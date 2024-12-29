import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../../config/theme/theme"
import { useAnimation } from "../../hooks/useAnimation"



export const Animation101Screen = () => {

    const {animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition} = useAnimation();


    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.purbleBox,
                {
                    opacity: animatedOpacity,
                    transform: [{
                        translateY: animatedTop
                    }]

                }
            ]}/>
             
            <Pressable onPress={() => {
                fadeIn({});
                startMovingTopPosition({
                    initialPosition: -100,
                    easing: Easing.elastic(4),
                    duration: 500,
                })
            }}
                style={{ marginTop: 30 }}
            >
                <Text>FadeIn</Text>
            </Pressable>

            <Pressable onPress={() => {fadeOut({duration: 200})}} style={{marginTop: 30}}>
                <Text>FadeOut</Text>
            </Pressable>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purbleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    }
})