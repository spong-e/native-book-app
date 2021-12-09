import React from 'react';
import { Text } from 'react-native';
import { useQuery, useMutation, gql } from '@apollo/client';
import Book from '../components/Book';

const GET_BOOK = gql`
    query book($id: ID!) {
        book(id: $id) {
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


const BookScreen = props => {
    const id = props.navigation.getParam('id');
    const { loading, error, data } = useQuery(GET_BOOK, { variables: { id } });
    
    
    if (loading) return <Text>Loading</Text>;
    if (error) return <Text>There is an Error!</Text>;
return (
        <Book book={data.book} />
    );
};
export default BookScreen;