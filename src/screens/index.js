import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import AuthLoading from './authloading';
import SignIn from './signin';
import Settings from './settings';
import Feed from './feed';
import Favorites from './favourites';
import MyBooks from './mybooks';
import BookScreen from './book';
//stacked navivator
const FeedStack = createStackNavigator({
    Feed: Feed,
    Book: BookScreen
});
const MyBooksStack = createStackNavigator({
    MyBooks: MyBooks,
    Book: BookScreen
});
const FavoritesStack = createStackNavigator({
    Favorites: Favorites,
    Book: BookScreen
});
   
const AuthStack = createStackNavigator({
    SignIn: SignIn
});
const SettingsStack = createStackNavigator({
    Settings: Settings
});
const TabNavigator = createBottomTabNavigator({
    FeedScreen: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
                <MaterialCommunityIcons name="home" size={24} color={'black'} />
            )
        }
    },
    MyBooksScreen: {
        screen: MyBooksStack,
        navigationOptions: {
            tabBarLabel: 'My Books',
            tabBarIcon: () => (
                <MaterialIcons name="library-books" size={24} color={'black'} />
            )
        }
    },
    FavoriteScreen: {
        screen: FavoritesStack,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: () => (
                <MaterialCommunityIcons name="star" size={24} color={'black'} />
            )
        }
    },
    Settings: {
        screen: SettingsStack,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: () => (
                <MaterialIcons  name="settings" size={24} color = {'black'} />
            )
        }
    }
       
});
const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Auth: AuthStack,
        App: TabNavigator
    },
    {
        initialRouteName: 'AuthLoading'
    }
);
export default createAppContainer(SwitchNavigator);