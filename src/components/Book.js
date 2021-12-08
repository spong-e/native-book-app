import React from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
const BookView = styled.ScrollView`
    padding: 10px;
`;
const Book = ({ book }) => {
    return (
        <BookView>
             <Text>
                Book by {book.author.username} 
            </Text>
            <Text>{book.title}</Text>
        </BookView>
    );
};
export default Book;