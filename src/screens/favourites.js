import React from 'react';
import { Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import BookFeed from '../components/BookFeed';
import Loading from '../components/Loading';
const GET_MY_FAVORITES = gql`
    query me {
        me {
            id
            username
            favorites {
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
    }
`;
const Favorites = props => {
    const { loading, error, data } = useQuery(GET_MY_FAVORITES);
// if the data is loading, display a loading message
    if (loading) return <Loading />;
    
    // if there is an error, display an error message
    if (error) return <Text>Error loading books</Text>;
    
    if (data.me.favorites.length !== 0) {
        return <BookFeed books={data.me.favorites} navigation={props.navigation} />;
    } else {
        return <Text>No books yet</Text>;
    }
   
};
Favorites.navigationOptions = {
    title: 'Favorites'
};
export default Favorites;