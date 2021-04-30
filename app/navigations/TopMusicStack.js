import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopMusic from '../screens/TopMusic'

const Stack = createStackNavigator()

export default function TopMusicStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='topmusic'
                component={TopMusic}
                options={{title:'Lo + Top'}}
            />
        </Stack.Navigator>
    )
}