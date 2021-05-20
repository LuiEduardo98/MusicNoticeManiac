import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Playlist from '../screens/Playlist/Playlist'
import AddPlayList from '../screens/Playlist/AddPlaylist'

const Stack = createStackNavigator()

export default function PlaylistStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Playlist'
                component={Playlist}
                options={{title:' Playlist Mex'}}
            />
            <Stack.Screen
                name='playlist'
                component={Playlist}
                options={{title:' Playlist Mex'}}
            />
            <Stack.Screen
                name='AddPlayList'
                component={AddPlayList}
                options={{title:' Playlist Mex'}}
            />
        </Stack.Navigator>
    )
}