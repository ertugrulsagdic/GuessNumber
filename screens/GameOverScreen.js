import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import Card from '../components/Card';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Card style={styles.cardContainer}>
                <Text >The Game is Over!</Text>
                <Text>Number of Rounds: {props.roundNumbers}</Text>
                <Text>Number was: {props.userNumber}</Text>
                <Button title="NEW GAME" onPress={props.onRestart} />
            </Card>
            
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer:{
        padding:60,
        alignItems: 'center',
    }
});

export default GameOverScreen;