import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        width : '100%',
        height : 80,
        marginTop : 35,
        backgroundColor : '#42a6a8',
        alignItems : 'center',
        justifyContent : 'center'
    },
    headerTitle : {
        color : 'black',
        fontSize : 20
    }
})

export default Header