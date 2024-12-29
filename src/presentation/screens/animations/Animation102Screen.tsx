
import { useRef } from "react"
import { Animated, PanResponder, StyleSheet, Text, View } from "react-native"



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
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        cordinates,
        {toValue:
          {
            x:0,
            y:0,
          },
          useNativeDriver: true
        },
      ).start()
    },
  });

  return (
    <View style={styles.container}>
        <Animated.View 
          {...handlerTranslate.panHandlers}
          style={[cordinates.getLayout(), styles.box]} 
          />
    </View>
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