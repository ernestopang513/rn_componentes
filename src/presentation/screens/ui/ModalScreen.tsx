
import { Modal, Platform, Text, useWindowDimensions, View } from "react-native"
import { CustomView } from '../../components/ui/CustomView';
import { Title } from "../../components/ui/Title"
import { Button } from "../../components/ui/Button"
import { useState } from "react"



export const ModalScreen = () => {

  const [isVisible, setIsVisible] = useState(	false)
  const {height, width} = useWindowDimensions()
  return (
    <CustomView margin>
        <Title text='Modal' safe />

        <Button
          text="Abrir Modal"
          onPress={() => setIsVisible(true)}
        />

        <View style={{backgroundColor: 'red', height: 100, width: 100, alignSelf: 'center', marginVertical: "auto"}} />

        <Modal 
          visible={ isVisible }
          animationType="slide"
          transparent
        >
            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.1)', flex: 1,}}>
                <CustomView style={{backgroundColor: 'white',  width: width * 0.6, marginVertical: height * 0.3, alignSelf: "center", borderRadius: 10}}>
                <View style={{paddingHorizontal: 10, alignSelf: 'center' }}>
                <Title text='Modal content' centered/>
                </View>

                <View style={{flex: 1}} />
                <Button
                  text='Cerrar Modal'
                  onPress={() => setIsVisible(false)}
                  styles = {{ height: Platform.OS === 'android' ? 40 : 60, borderTopStartRadius: 0, borderTopEndRadius: 0}}
                  />
                </CustomView>
            </View>
        </Modal>

    </CustomView>
  )
}