import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import styles from '../Design/App-Design'
import ItemSeparatorView from './ItemSeparatorView'

export default function List({ filterData, search, id }) {
    function pressHandle(e) {
        search(e.grocery)
        id(e.key)
    }

    const ItemView = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={(e) => pressHandle(item)}>
                    <Text style={styles.listItem}>{item.grocery.toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            <View>
                <FlatList style={styles.container}
                    data={filterData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}>
                </FlatList>
            </View>
        </>
    )
}
