import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!!!!</Text>
            <Text>Number of Rounds you took to guess the number : {props.roundsNumber}</Text>
            <Text>User Number was : {props.userNumber}</Text>
            <Button title='New Game' onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen