import React from 'react'
import {TextInput,StyleSheet} from 'react-native'

const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style}} />
}

const styles = StyleSheet.create({
    input : {
        height : 50,
        borderBottomColor : 'grey',
        borderBottomWidth : 1,
        marginBottom : 20,
        fontSize : 20
    }
})

export default Input