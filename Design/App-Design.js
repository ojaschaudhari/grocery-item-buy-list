import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        fontSize: 25,
        letterSpacing: 5,
        paddingVertical: 15,
    },
    container: {
        backgroundColor: '#272727',
    },
    divider: {
        height: 1,
        backgroundColor: '#747474',
    },
    listItem: {
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#1f2833',
        color: '#14a76c',
    },
    textInput: {
        width: '85%',
        backgroundColor: '#000',
    },
    searchAdd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    add: {
        justifyContent: 'center',
    },
    addImg: {
        height: 40,
        width: 40,
        marginHorizontal: 15,
    },
    slist: {
        flexDirection: 'row-reverse'
    },
    cartItem: {
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#1f2833',
        color: '#14a76c',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    }
})

export default styles