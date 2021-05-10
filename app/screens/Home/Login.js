import React, {useRef} from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message';
import LoginForm from '../../components/Account/LoginForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Login(){
    const toastRef = useRef()
    return(
    <KeyboardAwareScrollView>
        <Image
            source={require('../../../assets/img/music-note-1275650_1920.png')}
            resizeMode='contain'
            style={styles.logo}
            />
        <View style = {styles.viewForms}>
            <LoginForm toastRef={toastRef}/>
        </View>
        <View style={StyleSheet.viewContainer}>
                <Text>Login Form</Text>
                <CreateHome/>
        </View>
        <Divider style= {styles.divider}/>
        <Toast ref={toastRef}/>
    </KeyboardAwareScrollView>
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
        color: '#0033FF',
        fontWeight: 'bold'
    },
    divider:{
        backgroundColor: '#FF0000',
        margin: 40
    },
    viewForms:{
        marginRight: 40,
        marginLeft: 40,
    }
})