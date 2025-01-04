
import { useState } from "react"
import { ActivityIndicator, FlatList, Image, Text, useWindowDimensions, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { colors } from "../../../config/theme/theme";



export const InfiniteScrollScreen = () => {
    const {height} = useWindowDimensions()
    const [numbers, setNumbers] = useState([0,1,2,3,4,5])
    const loadMore = () => {
        setTimeout(() => {
            const newArray = Array.from({length: 5}, (_, i) => numbers.length + i)
            setNumbers([...numbers, ...newArray])
            
        }, 1000 * 2);
    };

  return (
    <CustomView style = {{backgroundColor: 'black'}}>

        <FlatList
        
            data ={ numbers }
            onEndReached={loadMore}
            onEndReachedThreshold={0.6}
            keyExtractor={(item) => item.toString()}
            renderItem = {({item}) => <ListItem number={item} /> }

            ListFooterComponent={() => (
                <View style={{height: height * 0.16, justifyContent: 'center'}}>
                    <ActivityIndicator size={'large'} color = {colors.primary}  />
                </View>
            )}
                
        />
    </CustomView>
  )
}

interface ListItemProps {
    number: number;
}

const ListItem = ({number}: ListItemProps) => {
    return (
        <Image
            source={{uri: `https://picsum.photos/id/${number}/500/400`}}
            style = {{
                height: 400,
                width: '100%'
            }}
        />
    )
}