import { Title } from "../../components/ui/Title"
import { RefreshControl, SafeAreaView, ScrollView } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"
import { useCallback, useContext, useState } from "react"
import { colors, globalStyles } from "../../../config/theme/theme"
import { ThemeContext } from "../../context/ThemeContext"


// ! Aqui el parametro progressViewOffset falla
export const PullToRefreshScreen = () => {
    const [isRefreshing, setIsRefreshing] = useState(false)
    const {colors} = useContext(ThemeContext)
    // const { top } = useSafeAreaInsets();
    const onRefresh2 =useCallback( () => {
        if(isRefreshing) return
        // console.log(isRefreshing)

        setIsRefreshing(true);

        // Simula una operación de refresh
        setTimeout(() => {
            console.log("Refresh completed");
            setTimeout(() => {
                setIsRefreshing(false);
                
            }, 100);
        }, 5000); // Cambia este tiempo según tu necesidad
    }, [isRefreshing])
    return (
        // <SafeAreaProvider>
        // <SafeAreaView style={{flex: 1}}>

        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    // progressViewOffset={top}
                    colors={[colors.primary, 'red', 'orange', 'green']}
                    onRefresh={onRefresh2}
                />}
            style ={[globalStyles.mainContainer, globalStyles.globalMargin, {backgroundColor: colors.background}]}
            
        >
            
                <Title text={"Pull to refresh"} safe />
            
        </ScrollView>
        // </SafeAreaView>

        // </SafeAreaProvider>
    )
}