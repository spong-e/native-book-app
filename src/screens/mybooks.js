import React from 'react';
import { Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import BookFeed from '../components/BookFeed';
import Loading from '../components/Loading';
//GraphQL query
const GET_MY_BOOKS = gql`
    query me {
        me {
            id
            username
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
    }
`;
const MyBooks = (props) => {
    const { loading, error, data } = useQuery(GET_MY_BOOKS);
if (loading) return <Loading />
    if (error) return <Text>Error loading books</Text>;
// if the query is successful and there are books then return the feed of books
    // else if there is no books, display a message 
    if (data.me.books.length !== 0) {
        return <BookFeed books={data.me.books} navigation={props.navigation} />;
    } else {
        return <Text>No books yet</Text>;
    }
};
MyBooks.navigationOptions = {
    title: 'My Books'
};
export default MyBooks;