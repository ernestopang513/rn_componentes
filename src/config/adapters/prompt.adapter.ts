import prompt from "react-native-prompt-android";

export enum CancelStyle {
    Cancel = 'cancel',
    Default = 'default',
    Destructive = 'destructive'
}

export enum TypeKeyboard {
    Default = 'default',
    Email = 'email-address',
    Login = 'login-password',
    Numeric = 'numeric',
    Phone = 'phone-pad',
    Text = 'plain-text',
    Secure = 'secure-text'
}


interface Options {
    title: string;
    msg?: string;
    okText?: string;
    cancelText?: string;
    cancelStyle?: CancelStyle;
    onPressOk?: (arg0: string) => void;
    onPresCancel?: () => void;
    type?: TypeKeyboard;
    cancelable?: boolean;
    defaultValue?: string,
    placeholder?: string
    // config?: {
    //     type?: string;
    //     cancelable?: boolean;
    //     defaultValue?: string;
    //     placeholder?: string;
    // }


}

export const showPrompt = (
    {   title, 
        msg, 
        okText = 'ok', 
        cancelText = 'Cancel',
        cancelStyle = CancelStyle.Cancel,
        onPressOk = () => console.log('OK presionado'),
        onPresCancel = () => console.log('Cancel presionado'),
        type = TypeKeyboard.Secure,
        cancelable = false,
        defaultValue = '',
        placeholder = 'Placeholder'
    }: Options) => {

        
    prompt(
                title,
                msg,
                [
                 {text: cancelText, onPress: onPresCancel, style: cancelStyle},
                 {text: okText, onPress: (value: string) => onPressOk(value)},
                ],
                {
                    type,
                    cancelable,
                    defaultValue,
                    placeholder
                }
            );
}