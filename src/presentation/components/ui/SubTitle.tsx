
import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors, globalStyles } from "../../../config/theme/theme";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface Props {
    text: string;
    safe?: boolean;
    backgroundColor?: string;
}

export const SubTitle = ({text, safe = false, backgroundColor = colors.background}: Props) => {
    const {colors} = useContext(ThemeContext)
    const {top} = useSafeAreaInsets()
  return (
      <Text style = {{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor: backgroundColor,
        color: colors.text
      }}>
        { text }
      </Text>
  )
}