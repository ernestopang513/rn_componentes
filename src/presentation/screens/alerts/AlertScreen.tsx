
import { Alert, Text, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Card } from "../../components/ui/Card"
import { globalStyles } from "../../../config/theme/theme"
import { Title } from "../../components/ui/Title"
import { Button } from "../../components/ui/Button"
import { CancelStyle, showPrompt, TypeKeyboard } from '../../../config/adapters/prompt.adapter';
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"



export const AlertScreen = () => {

    const {isDark} = useContext(ThemeContext);

    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', `'My Alert Msg' \n \n ${JSON.stringify({isDark}, null, 2)}`, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],{
            userInterfaceStyle: isDark ? 'dark': 'light',
        });

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    const OnshowPromt = () => {    
        
        showPrompt({
            title: 'Prompt', 
            msg: 'Mensaje', 
            onPressOk: (value) => console.log(value), 
            cancelStyle: CancelStyle.Destructive,
            placeholder: 'Hola',
            defaultValue: 'Ernesto',
            type: TypeKeyboard.Secure
        })
        
        
        
        // ! Código nativo
        // Alert.prompt(
        //     'Correo electronico',
        //     'Lorem ipsum dolor sit amet consectetur.',
        //     (valor: string) => console.log({valor})
        // )
    }
  return (
    <CustomView style={[globalStyles.globalMargin, ]}>
        <Title safe text='Alertas'  />
        <Card style={{marginTop: 100,}} >
            <Button 
                text='Alerta - 2 Botones'
                onPress={createTwoButtonAlert}
            />

            <View
                style={{marginVertical: 5}}
            />

            <Button 
                text='Alerta - 3 Botones'
                onPress={createThreeButtonAlert}
            />
            
            <View
                style={{marginVertical: 5}}
            />
            
            <Button 
                text='Promt - input'
                onPress={OnshowPromt}
            />
        </Card>
    </CustomView>
  )
}