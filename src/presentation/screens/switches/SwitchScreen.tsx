import { Switch } from "react-native"
import { Card } from "../../components/ui/Card"
import { CustomView } from "../../components/ui/CustomView"
import { useState } from "react"
import { CustomSwitch } from "../../components/ui/CustomSwitch"
import { Separator } from "../../components/ui/Separator"



export const SwitchScreen = () => {

    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previusState => !previusState);

    const [state, setState] = useState({
            isActive: true,
            isHungy: false,
            isHappy: true,
        })
    

  return (
    <CustomView style={{marginTop: 100,paddingHorizontal: 10}}>
       <Card>
        
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => setState({...state, isActive: value})}
          text= '¿Esta activo?'
        />

        <Separator
          
        />

        <CustomSwitch
          isOn={state.isHungy}
          onChange={value => setState({...state, isHungy: value})}
          text= '¿Tiene hambre?'
        />

        <Separator/>

        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => setState({...state, isHappy: value})}
          text= '¿Es feliz?'
        />

       </Card>
    </CustomView>
  )
}