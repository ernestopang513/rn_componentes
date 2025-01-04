
import { useState } from "react"
import { FlatList, Text } from "react-native"
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { colors } from "../../../config/theme/theme";



export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0,1,2,3,4,5])
    const loadMore = () => {
        console.log('Loading more')
        const newArray = Array.from({length: 5}, (_, i) => numbers.length + i)
        setNumbers([...numbers, ...newArray])
    };

  return (
    <CustomView>
        <Title text ="InfiniteScrollScreen"/>

        <FlatList
        
            data ={ numbers }
            onEndReached={loadMore}
            onEndReachedThreshold={0.6}
            keyExtractor={(item) => item.toString()}
            renderItem = {({item}) => 
                <Text style = {{
                    height: 300, 
                    backgroundColor: colors.primary,
                    color: 'white',
                    fontSize: 50,
                }}>
                    {item}
                </Text> }
        />
    </CustomView>
  )
}