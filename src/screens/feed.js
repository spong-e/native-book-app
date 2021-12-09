import React from 'react';
import { Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import BookFeed from '../components/BookFeed';
const GET_BOOKS = gql`
    query books {
        books {
            id
            title
            favoriteCount
            author {
                username
                id
                avatar
            }
        }
    }
`;
const Feed = props => {
const { loading, error, data } = useQuery(GET_BOOKS);
    console.log("Error: ", error)
    console.log("data: ", data)
    
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error loading books feed </Text>;
return (
        <BookFeed books={data.books} navigation={props.navigation} />
    );
};
Feed.navigationOptions = {
    title: 'Feed'
};
export default Feed;