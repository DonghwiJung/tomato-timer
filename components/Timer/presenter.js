import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import Button from "../Button";

class Timer extends Component {
    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Button iconName={"play-circle"} onPress={() => alert("Button Clicked!")} />
                    <Button iconName={"stop-circle"} onPress={() => alert("Button Clicked!")} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "skyblue"
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        fontSize: 120,
        color: 'white',
        fontWeight: "100"
    }
})

export default Timer;