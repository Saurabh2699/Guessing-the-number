import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import NumberContainer from './NumberContainer'
import Card from './Card'

const generateRandomNumbers = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNum = Math.floor(Math.random() * (max - min)) + min
    if (randomNum === exclude) {
        return generateRandomNumbers(min, max, exclude)
    } else {
        return randomNum
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentguess] = useState(generateRandomNumbers(1, 100, props.userChoice))
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const {userChoice,onGameOver} = props
    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds)
        }
    },[currentGuess,userChoice,onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert("Don't Lie....", "You know that this is wrong.......!!!!", [
                { text: 'Sorry!', style: 'cancel' }
            ])
            return
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomNumbers(currentLow.current, currentHigh.current, currentGuess)
        setCurrentguess(nextNumber)
        setRounds(curRounds => curRounds + 1)
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Choice</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER' onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title='GREATER' onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen