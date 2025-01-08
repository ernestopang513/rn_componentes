import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../../config/theme/theme"
import { useAnimation } from "../../hooks/useAnimation"
import { Button } from "../../components/ui/Button";
import { CustomView } from "../../components/ui/CustomView";



export const Animation101Screen = () => {

    const {animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition} = useAnimation();

    return (
        <CustomView style={styles.container}>
            <Animated.View style={[
                styles.purbleBox,
                {
                    opacity: animatedOpacity,
                    transform: [{
                        translateY: animatedTop
                    }]

                }
            ]}/>
{/*              
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
            </Pressable> */}


            <Button
                text="FadeIn"
                onPress={() => {
                    fadeIn({});
                    startMovingTopPosition({
                        initialPosition: -100,
                        easing: Easing.elastic(4),
                        duration: 500,
                    })
                }}
                styles = {{marginTop: 30, width: '30%'}}
            />

            {/* <Pressable onPress={() => {fadeOut({duration: 200})}} style={{marginTop: 30}}>
                <Text>FadeOut</Text>
            </Pressable> */}

            <View style = {{marginVertical: 20}} />

            <Button
                text="FadeOut"
                onPress={() => {fadeOut({duration: 200})}}
                styles = {{width: '30%'}}
            />
        </CustomView>
    )
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purbleBox: {
        backgroundColor: 'orange',
        width: 150,
        height: 150,
    }
})