import React from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Button, Text } from 'react-native';
import { useMutation, gql } from '@apollo/client';

import UserForm from '../components/UserForm';
import Loading from '../components/Loading';

const SIGNIN_USER = gql`
    mutation signIn($email: String, $password: String!) {
        signIn(email: $email, password: $password)
    }
`;

const SignIn = props => {

    // store the token then navigate to the app's main screen
    const storeToken = token => {
        console.log('token>>>', token)
        SecureStore.setItemAsync('token', token).then(
            props.navigation.navigate('App')
        );
    };
    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
        onCompleted: data => {
            console.log('onCompleted')
            storeToken(data.signIn)
        }
    });
    
    if (loading) return <Loading />;
    return (
        <React.Fragment>
            {error && <Text>Error signing in!</Text>}
            <UserForm
                action={signIn}
                formType="signIn"
                navigation={props.navigation}
            />
        </React.Fragment>
    );
}
SignIn.navigationOptions = {
 title: 'Sign In'
};
export default SignIn;