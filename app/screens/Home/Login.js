import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

export default function Login(){
    return(
    <ScrollView>
        <Image
            source={require('../../../assets/img/music-note-1275650_1920.png')}
            resizeMode='contain'
            style={styles.logo}
            />
            <View style={StyleSheet.viewContainer}>
                <Text>Login Form</Text>
                <CreateHome/>
            </View>
            <Divider style= {styles.divider}/>
    </ScrollView>
    )
}

function CreateHome(){
    const navigation= useNavigation()
    return(
        <Text style= {styles.textRegister}> 
        Aun no tienes cuenta { ' '}
            <Text
                style = {styles.linkRegister}
                onPress={()=>navigation.navigate('register')}
            >
                Registrate
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: '100%',
        height: 150,
        marginTop: 20
    },
    viewContainer:{
        marginRight: 40,
        marginLeft: 40
    },
    textRegister:{
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    linkRegister:{
        color: '#00a680',
        fontWeight: 'bold'
    },
    divider:{
        backgroundColor: '#00a680',
        margin: 40
    }
})