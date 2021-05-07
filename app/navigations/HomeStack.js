import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/Home'
import Login from '../screens/Home/Login'
import Register from '../screens/Home/Register'

const Stack = createStackNavigator()

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='home'
                component={Home}
                options={{title:'Inicio'}}
            />
            <Stack.Screen
                name='login'
                component={Login}
                options={{title:'Iniciar sesion'}}
            />
            <Stack.Screen
                name='register'
                component={Register}
                options={{title:'Registro'}}
            />
        </Stack.Navigator>
    )
}