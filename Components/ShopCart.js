import React, { useState, useEffect } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import styles from '../Design/App-Design'
import ItemSeparatorView from './ItemSeparatorView'


export default function ShopCart({ sList }) {

    return (
        <>
            <View>
                <Text style={styles.heading}>Shopping List</Text>
                <FlatList data={sList}
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={item => (
                        <View style={styles.cartItem}>
                            <Text>{item.item.grocery.toUpperCase()}
                            </Text>
                        </View>
                    )}
                ></FlatList>
            </View>

        </>
    )
}
