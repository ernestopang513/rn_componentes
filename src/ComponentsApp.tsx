
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { StackNavigator } from "./presentation/navigator/StackNavigator"
import { Children, PropsWithChildren, useContext } from "react"
import { ThemeContext, ThemeProvider } from "./presentation/context/ThemeContext"


const AppaNavigation = ({children}: PropsWithChildren) => {
  const {isDark} = useContext(ThemeContext)
  return (
    <NavigationContainer theme={isDark ?  DarkTheme : DefaultTheme} >
        {children}
    </NavigationContainer>
  )
}


const AppTheme = ({children}: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppaNavigation>{children}</AppaNavigation>
    </ThemeProvider>
  )
}

// export const ComponentsApp = () => {
//   return (
//     <NavigationContainer>
//       <StackNavigator/>
//     </NavigationContainer>
//   )
// }



export const ComponentsApp = () => {
  return (
    <AppTheme>
      <StackNavigator/>
    </AppTheme>
  )
}