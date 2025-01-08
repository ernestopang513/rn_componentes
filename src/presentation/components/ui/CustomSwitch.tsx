
import { Platform, StyleSheet, Switch, Text, View } from "react-native"
import { colors } from "../../../config/theme/theme"
import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../../context/ThemeContext";

interface Props {
    isOn: boolean;
    text?: string;

    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, text = 'Custom Switch', onChange}: Props) => {

    const  {colors} = useContext(ThemeContext)
  return (
    <View style={styles.switchRow}>

        {
            text && (<Text style={{color: colors.text}} >{text}</Text>)
        }

        <Switch
            // thumbColor={Platform.OS === 'android' ? colors.primary : ''}
            thumbColor={Platform.OS === 'android' ? '#E7E7E7' : ''}
            // thumbColor = {isEnabled ? 'pink': 'purple'}
            // trackColor={{true: '#4BD863', false: 'white'}}
            trackColor={{true: colors.primary, false: 'white'}}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onChange}
            value= {isOn}
        />


    </View>
  )
}



const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        // backgroundColor: 'red'
    }
})