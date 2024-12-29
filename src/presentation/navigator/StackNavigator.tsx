

import { createStackNavigator } from "@react-navigation/stack"
import { HomeScreen } from "../screens/home/HomeScreen";
import { Animation101Screen, Animation102Screen } from "../screens/animations";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Animation101Screen' component={Animation101Screen}/>
        <Stack.Screen name='Animation102Screen' component={Animation102Screen}/>
    </Stack.Navigator>
  )
}