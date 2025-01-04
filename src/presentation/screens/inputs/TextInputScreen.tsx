
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { globalStyles } from "../../../config/theme/theme"
import { Card } from "../../components/ui/Card"
import { useState } from "react"



export const TextInputScreen = () => {

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
            style={globalStyles.input}
            placeholder="Nombre completo"
            placeholderTextColor='black'
            autoCapitalize="words"
            autoCorrect= {false}
            onChangeText={value => setForm({...form, name: value})}
          />
         
          <TextInput
            style={globalStyles.input}
            placeholder="Email"
            placeholderTextColor='black'
            autoCapitalize="none"
            autoCorrect= {false}
            keyboardType='email-address'
            onChangeText={value => setForm({...form, email: value})}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Teléfono"
            placeholderTextColor='black'
            autoCapitalize="none"
            autoCorrect= {false}
            keyboardType='phone-pad'
            onChangeText={value => setForm({...form, phone: value})}
          />
        </Card>

        <View style = {{height: 10}} />

        <Card>
          <Text>{JSON.stringify(form, null, 10)}</Text>
          <Text>{JSON.stringify(form, null, 10)}</Text>
          <Text>{JSON.stringify(form, null, 10)}</Text>
        </Card>
        <View style = {{height: 10}} />
        <Card>
          <Text>{JSON.stringify(form, null, 10)}</Text>
          <Text>{JSON.stringify(form, null, 10)}</Text>
          <Text>{JSON.stringify(form, null, 10)}</Text>
        </Card>
        <View style = {{height: 10}} />
        <Card>
          <Text>{JSON.stringify(form, null, 10)}</Text>
          <Text>{JSON.stringify(form, null, 10)}</Text>
          <Text>{JSON.stringify(form, null, 10)}</Text>
        </Card>

        <View style = {{height: 20}} />
          <TextInput
            style={globalStyles.input}
            placeholder="Teléfono"
            placeholderTextColor='black'
            autoCapitalize="none"
            autoCorrect= {false}
            keyboardType='phone-pad'
            onChangeText={value => setForm({...form, phone: value})}
          />
    </CustomView>
    <View style ={{height: 20}} />
    </ScrollView>
    </KeyboardAvoidingView>

  )
}