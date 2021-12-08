import React from 'react';
import { Text, View } from 'react-native';
const MyBooks = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>My Books</Text>
        </View>
    );
};
MyBooks.navigationOptions = {
    title: 'My Books'
};
export default MyBooks;