import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, TextInput, View, Button} from "react-native";

export default class UrlInputScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: 'https://'
        };
    }

    _setUrl = (event) => {
        this.setState({url: event.nativeEvent.text});
    };

    _openUrlInWebView = () => {
        this.props.navigation.navigate('WebViewScreen', {url: this.state.url});
    };

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior='padding'>
                <Image
                    style={styles.image}
                    source={require('../assets/logo.png')}/>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        value={this.state.url}
                        onChange={this._setUrl}
                        onSubmitEditing={this._openUrlInWebView}
                        autoCorrect={false}
                        underlineColorAndroid='transparent'
                        accessibilityLabel='url'/>
                    <Button
                        style={styles.button}
                        onPress={this._openUrlInWebView}
                        title='Go'
                        accessibilityLabel='submit'/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        flexDirection: 'row',
    },
    input: {
        backgroundColor: '#eee',
        color: '#999',
        borderRadius: 20,
        padding: 10,
        marginRight: 10,
        height: 40,
        flex: 0.8
    },
    button: {
        flex: 0.2
    },
    image: {
        width: 174,
        height: 58,
    }
});