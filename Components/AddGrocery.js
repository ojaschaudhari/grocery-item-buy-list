import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import styles from '../Design/App-Design'
import { Groceries } from './Grocries'

export default function AddGrocery({ search, setsList, id }) {
    function itemAdd() {
        Groceries.map((item) => {
            if (search === item.grocery) {
                setsList((prevLists) => {
                    return [{grocery: search, key: id }, ...prevLists]
                })
            }
        })
    }

    return (
        <>
            <View style={styles.add}>
                <TouchableOpacity onPress={itemAdd}>
                    <Image style={styles.addImg}
                        source={require('../Img/plus.png')} />
                </TouchableOpacity>
            </View>
        </>
    )
}
