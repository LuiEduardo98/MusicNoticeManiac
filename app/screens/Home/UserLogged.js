import React, {useState, useRef, useEffect} from 'react'
import { Button } from 'react-native-elements'
import { View, Text, StyleSheet } from 'react-native'
import firebase from 'firebase'
import Toast from 'react-native-toast-message'
import InfoUser from '../../components/Account/InfoUser'

export default function UserLogged(){
    const [userInfo, setUserInfo] = useState(null)
    const toastRef = useRef()
    useEffect(() =>{
        (async()=>{
            const user = await firebase.auth().currentUser
            setUserInfo(user)
        })()
    }, [])
    return(
        <View>
            <View style={styles.viewcontainer}>
                {userInfo && <InfoUser userInfo={userInfo} toastRef={toastRef}/>}
                <Toast ref={toastRef}/>
            </View>
            <View style={styles.viewcontainer}>
                <Button
                    containerStyle={styles.btnContainer}
                    buttonStyle={styles.btnRegister}
                    title='Cerrar sesión' onPress={()=>firebase.auth().signOut()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewUserInfo:{
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },
    btnContainerRegister:{
        marginTop: 20,
        paddingTop:30,
        width: '95%',
    },
    btnRegister:{
        backgroundColor: '#3333FF'
    },
    viewcontainer:{
        alignItems: 'center',
        marginBottom: 50
    }
})