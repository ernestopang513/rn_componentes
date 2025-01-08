
import { useRef } from "react"
import { Animated, PanResponder, StyleSheet, Text, View } from "react-native"
import { PanGesture } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { CustomView } from "../../components/ui/CustomView";



export const Animation102Screen = () => {

  const cordinates = useRef(new Animated.ValueXY()).current;

  const handlerTranslate = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: cordinates.x,
        dy: cordinates.y,
      },
    ],{
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      Animated.spring(
        cordinates,
        {toValue:
          {
            x:0,
            y:0,
          },
          useNativeDriver: false
        },
      ).start()
    },
  });

  return (
    <SafeAreaProvider>
    <CustomView style={styles.container}>
        <Animated.View 
          {...handlerTranslate.panHandlers}
          // style={[{transform: [{translateX: cordinates.x}, {translateY: cordinates.y}]}, styles.box]} 
          style={[cordinates.getLayout(), styles.box]} 
          />
    </CustomView>
    </SafeAreaProvider>

  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  box: { 
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 4
  }
})