import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Text, View,  Button} from 'react-native';
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
        console.log(data)
        if (loading) return <Text>Loading</Text>;
        if (error) return <Text>Error loading books feed</Text>;
    return (
            <BookFeed books={data.books} navigation={props.navigation} />
        );
    };
//screen title
Feed.navigationOptions = {
    title: 'Feed'
};
export default Feed;