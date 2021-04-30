import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import HomeStack from './HomeStack'
import NewsMusicStack from './NewsMusicStack'
import SearchMStack from './SearchMStack'
import TopMusicStack from './TopMusicStack'
import PlaylistStack from './PlaylistStack'
const Tab = createBottomTabNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='home'
                tabBarOptions={{
                    inactiveTintColor: '#31B648',
                    activeTintColor: '#DF4C28'
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon:({ color }) => screenOptions (route, color)
                })} 
            >
                <Tab.Screen 
                name= 'home' 
                component={HomeStack}
                options={{title:'Inicio ♫'}}
                />
                <Tab.Screen 
                name= 'newsmusic' 
                component={NewsMusicStack}
                options={{title:'Musica Nuevaaaaaa♪'}}
                />
                <Tab.Screen 
                name= 'playlist' 
                component={PlaylistStack}
                options={{title:'Lista Musical ♫'}}
                />
                <Tab.Screen 
                name= 'search' 
                component={SearchMStack}
                options={{title:'Buscar ♪'}}
                />
                <Tab.Screen 
                name= 'topmusic' 
                component={TopMusicStack}
                options={{title:'Top Musica ♫'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color){
    let iconName

    switch(route.name){
        case 'home': 
            iconName='music-box-multiple'
            break
        case 'newsmusic':
            iconName='music-note-plus'
            break
        case 'playlist':
            iconName='account-music'
            break
        case 'search':
            iconName='book-music'
            break
        case 'topmusic':
            iconName='music-circle'
            break
    }
    return (
        <Icon type='material-community' name={iconName} size={32} color={color}/>
    )
}