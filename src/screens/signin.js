import React from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Button, Text } from 'react-native';
const SignIn = props => {

    // store the token then navigate to the app's main screen
    const storeToken = () => {
        SecureStore.setItemAsync('token', 'abc').then(
            props.navigation.navigate('App')
        );
    };
    return (
        <View>
            <Button title="Sign in!" onPress={storeToken} />
        </View>
    );
}
SignIn.navigationOptions = {
 title: 'Sign In'
};
export default SignIn;