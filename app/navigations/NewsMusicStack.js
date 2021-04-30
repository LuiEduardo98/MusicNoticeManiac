import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NewsMusic from '../screens/NewsMusic'

const Stack = createStackNavigator()

export default function NewsMusicStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='newsmusic'
                component={NewsMusic}
                options={{title:'Nueva musica'}}
            />
        </Stack.Navigator>
    )
}