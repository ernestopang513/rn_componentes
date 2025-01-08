import { Text, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { Button } from "../../components/ui/Button"
import { useContext } from "react"
import { ThemeContext, ThemeProvider } from "../../context/ThemeContext"



export const ChangeThemeScreen = () => {

    const {setTheme, currentTheme, colors} = useContext(ThemeContext)
  return (
    <CustomView margin>
        <Title text= {`Cambiar tema: ${currentTheme.toUpperCase()}`} />

        <Button
            text="Light"
            onPress={()=>setTheme('light')}
            styles = { { width: '50%', alignSelf: 'center', marginTop: 20}}
        />

        <View style={{height: 30}} />
        <Button
            text="Dark"
            onPress={()=>setTheme('dark')}
            styles = { { width: '50%', alignSelf: 'center'}}
        />

        <View style={{height: 30}} />

        <Text style = {{ color : colors.text}}>
            {JSON.stringify(colors, null, 3)}
        </Text>

    </CustomView>
  )
}