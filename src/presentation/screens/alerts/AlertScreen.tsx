
import { Alert, Text, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Card } from "../../components/ui/Card"
import { globalStyles } from "../../../config/theme/theme"
import { Title } from "../../components/ui/Title"
import { Button } from "../../components/ui/Button"



export const AlertScreen = () => {
    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

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
                onPress={()=>{}}
            />
        </Card>
    </CustomView>
  )
}