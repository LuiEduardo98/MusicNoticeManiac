import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Playlist from '../screens/Playlist'

const Stack = createStackNavigator()

export default function PlalistStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='playlist'
                component={Playlist}
                options={{title:' Playlist Mex'}}
            />
        </Stack.Navigator>
    )
}