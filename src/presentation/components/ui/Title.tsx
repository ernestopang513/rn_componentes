
import { Text, View } from "react-native"
import { globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface Props {
    text: string;
    safe?: boolean;
    white?: boolean;
    centered?: boolean;
}

export const Title = ({text,safe=false,white = false, centered = false}: Props) => {

    const {top} = useSafeAreaInsets();
    const {colors} = useContext(ThemeContext)

  return (
   <Text
    style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        color: white? 'white' : colors.text,
        textAlign: centered? 'center' : 'auto'
    }}
   >
    {text}
   </Text>
  )
}