import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import Button from "../Button";

function formatTime(timeValue){
    const minutes = Math.floor(timeValue / 60);
    const seconds = timeValue - minutes * 60;
    // let returnValue = '';
    // if(minutes < 10) {
    //     returnValue += `0${minutes}`;
    // } else {
    //     returnValue += minutes;
    // }
    // returnValue += ':';
    // if(seconds < 10) {
    //     returnValue += `0${seconds}`;
    // } else {
    //     returnValue += seconds;
    // }
    // return returnValue
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

class Timer extends Component {
    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        if(!currentProps.isPlaying && nextProps.isPlaying) {
            const interval = setInterval(() => {
                currentProps.addSecond()
            }, 1000)
            this.setState({
                interval
            })
        } else if (currentProps.isPlaying && !nextProps.isPlaying) {
            clearInterval(this.state.interval);
        }
    }
    render() {
        const {
             isPlaying,
             elapsedTime,
             timeDuration,
             startTimer,
             restartTimer,
             addSecond
             }
              = this.props;
        console.log(elapsedTime);
        console.log(isPlaying)
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={styles.upper}>
                    <Text style={styles.time}>{formatTime(timeDuration - elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying && <Button iconName={"play-circle"} onPress={startTimer} /> }
                    {isPlaying && <Button iconName={"stop-circle"} onPress={restartTimer} /> }
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