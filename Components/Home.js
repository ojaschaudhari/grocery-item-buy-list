import React, { useState, useEffect } from 'react'
import { SafeAreaView, TextInput, View } from 'react-native'
import { Groceries } from './Grocries'
import styles from '../Design/App-Design'
import List from './List'
import AddGrocery from './AddGrocery'
import ShopCart from './ShopCart'

export default function Home() {
    const [filterData, setfilterData] = useState([])
    const [masterData, setmasterData] = useState([])
    const [show, setshow] = useState(false)
    const [search, setsearch] = useState("")
    const [sList, setsList] = useState([])
    const [id, setid] = useState("")

    useEffect(() => {
        callData()
        return () => { }
    }, [])

    async function callData() {
        await setfilterData(Groceries)
        await setmasterData(Groceries)
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.grocery ?
                    item.grocery.toUpperCase()
                    : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setfilterData(newData)
            setsearch(text)
            setshow(true)
        }

        else {
            setshow(false)
            setsearch(text)
        }
    }

    return (
        <>
            <SafeAreaView>
                <View>
                    <View style={styles.searchAdd}>
                        <TextInput style={styles.textInput}
                            value={search}
                            placeholder='Search Here'
                            onChangeText={(text) => searchFilter(text)}></TextInput>
                        <AddGrocery search={search} setsList={setsList} id={id}></AddGrocery>
                    </View>

                    {show ?
                        <List filterData={filterData} id={setid} search={setsearch}></List>
                        :
                        <View></View>}
                </View>
                <ShopCart sList={sList}></ShopCart>
            </SafeAreaView>
        </>
    )
}
