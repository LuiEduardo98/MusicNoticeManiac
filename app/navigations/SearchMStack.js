import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchM from '../screens/SearchM'

const Stack = createStackNavigator()

export default function SearchMStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='searchm'
                component={SearchM}
                options={{title:'Buscador Mex'}}
            />
        </Stack.Navigator>
    )
}