
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { globalStyles } from "../../../config/theme/theme"
import { Card } from "../../components/ui/Card"
import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { Colors } from "react-native/Libraries/NewAppScreen"



export const TextInputScreen = () => {

  const {colors} = useContext(ThemeContext)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios'? 'padding': 'position'}
    >
    <ScrollView>
    <CustomView margin>
        <Title text= 'Text Inputs' safe />

        <Card>
          <TextInput
            style={[globalStyles.input, {color: colors.text, borderColor: `rgba(${colors.text === 'white' ? '255': '0'},${colors.text === 'white' ? '255': '0'},${colors.text === 'white' ? '255': '0'}, 0.3)`}]}
            placeholder="Nombre completo"
            placeholderTextColor={colors.text}
            autoCapitalize="words"
            autoCorrect= {false}
            onChangeText={value => setForm({...form, name: value})}
            />
         
          <TextInput
            // style={[globalStyles.input, {color: colors.text, borderColor: 'rgba(255,255,255, 0.3)'}]}
            // style={globalStyles.input}
            style={[globalStyles.input, {color: colors.text, borderColor: `rgba(${colors.text === 'white' ? '255': '0'},${colors.text === 'white' ? '255': '0'},${colors.text === 'white' ? '255': '0'}, 0.3)`}]}

            placeholder="Email"
            placeholderTextColor={colors.text}
            // placeholderTextColor='black'
            autoCapitalize="none"
            autoCorrect= {false}
            keyboardType='email-address'
            onChangeText={value => setForm({...form, email: value})}
            />
          <TextInput
            // style={[globalStyles.input, {color: colors.text, borderColor: 'rgba(255,255,255, 0.3)'}]}
            style={[globalStyles.input, {color: colors.text, borderColor: `rgba(${colors.text === 'white' ? '255': '0'},${colors.text === 'white' ? '255': '0'},${colors.text === 'white' ? '255': '0'}, 0.3)`}]}

            // style={globalStyles.input}
            placeholder="Teléfono"
            placeholderTextColor={colors.text}
            // placeholderTextColor='black'
            autoCapitalize="none"
            autoCorrect= {false}
            keyboardType='phone-pad'
            onChangeText={value => setForm({...form, phone: value})}
          />
        </Card>

        <View style = {{height: 10}} />

        <Card>
          <Text style = {{color: colors.text}} >{JSON.stringify(form, null, 10)}</Text>
          <Text style = {{color: colors.text}} >{JSON.stringify(form, null, 10)}</Text>
          <Text style = {{color: colors.text}} >{JSON.stringify(form, null, 10)}</Text>
        </Card>
        <View style = {{height: 10}} />
        <Card>
          <Text style = {{color: colors.text}} >{JSON.stringify(form, null, 10)}</Text>
          <Text style = {{color: colors.text}} >{JSON.stringify(form, null, 10)}</Text>
          <Text style = {{color: colors.text}} >{JSON.stringify(form, null, 10)}</Text>
        </Card>
        <View style = {{height: 10}} />
        <Card>
          <Text style = {{color: colors.text}} >{JSON.stringify(form, null, 10)}</Text>
          <Text style = {{color: colors.text}} >{JSON.stringify(form, null, 10)}</Text>
          <Text style = {{color: colors.text}} >{JSON.stringify(form, null, 10)}</Text>
        </Card>

        <View style = {{height: 20}} />

        <Card>

          <TextInput
            // style={globalStyles.input}
            // style={[globalStyles.input, {color: colors.text, borderColor: 'rgba(255,255,255, 0.3)'}]}
            style={[globalStyles.input, {color: colors.text, borderColor: `rgba(${colors.text === 'white' ? '255': '0'},${colors.text === 'white' ? '255': '0'},${colors.text === 'white' ? '255': '0'}, 0.3)`}]}
            placeholder="Teléfono"
            // placeholderTextColor='black'
            placeholderTextColor={colors.text}
            autoCapitalize="none"
            autoCorrect= {false}
            keyboardType='phone-pad'
            onChangeText={value => setForm({...form, phone: value})}
            />
        </Card>
    </CustomView>
    <View style ={{height: 20, backgroundColor: colors.background}} />
    </ScrollView>
    </KeyboardAvoidingView>

  )
}