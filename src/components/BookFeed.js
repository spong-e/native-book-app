import React from 'react';
import styled from 'styled-components/native';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import Book from './Book';

const ContentView = styled.View`
    height: 100;
    overflow: hidden;
    margin-bottom: 10px;
`;
const Separator = styled.View`
    height: 1;
    width: 100%;
    background-color: #ced0ce;
`;



const BookFeed = props => {

    const { books } = props;
    return(
        <View>
            <FlatList
                data={books}
                keyExtractor={({ id }) => id.toString()}
                ItemSeparatorComponent={() => <Separator />}
                renderItem={
                    ({ item }) => (
                        <TouchableOpacity
                            onPress={() =>
                                props.navigation.navigate('Book', {
                                    id: item.id
                                })
                            }
                        >
                            <ContentView>
                                <Book book={item} />
                            </ContentView>
                      </TouchableOpacity>
                    )
                }
            />
        </View>
    );
};
export default BookFeed;