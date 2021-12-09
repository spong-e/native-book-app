import React from 'react';
import { Text, Button } from 'react-native';
import { useMutation, gql } from '@apollo/client';
import styled from 'styled-components/native';
const BookView = styled.ScrollView`
    padding: 10px;
`;
const FormBtn = styled.TouchableOpacity`
    background: #0077cc;
    width: 100%;
    padding: 8px;
`;
const BtnText = styled.Text`
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;


const TOGGLE_BOOK = gql`
    mutation($toggleFavoriteId: ID!) {
        toggleFavorite(id: $toggleFavoriteId) {
            favoriteCount
            id
        }
    }
`;

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

const Book = (props) => {
    const [toggle, { loading, error }] = useMutation(TOGGLE_BOOK, {
        refetchQueries: [
            GET_MY_FAVORITES, // DocumentNode object parsed with gql
          ],
        onCompleted: data => {
            console.log('toggled', data) 
        }
    });

    const { book } = props;

    const handleToggle = () => {
        toggle({
         variables: {
            toggleFavoriteId: book.id
         }
        });
       };

    return (
        <BookView>
           
             <Text>
                Book by {book.author.username} 
                
            </Text>
            <Text>{book.title}</Text>
           
            <FormBtn onPress={handleToggle}>
                <BtnText>{loading ? '...' : 'Toggle'}</BtnText>
            </FormBtn>
   
        </BookView>
    );
};
export default Book;