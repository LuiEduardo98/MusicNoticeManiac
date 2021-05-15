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
    },[])
    return(
            <View style={styles.viewUserInfo}>
                {userInfo&&<InfoUser userInfo={userInfo} toastRef={toastRef}/>}
                <Text>HomeOptions...</Text>
                <Button 
                    title='Únete'
                    buttonStyle={styles.btnCloseSession}
                    titleStyle={styles.btnCloseSessionText}
                    onPress={()=>firebase.auth().signOut()}
                />
                <Toast ref={toastRef}/>
            </View>
    )
}

const styles = StyleSheet.create({
    btnCloseSessionText:{
        color:'#00a680'
    },
    btnCloseSession:{
        marginTop: 30,
        borderRadius: 0,
        backgroundColor: '#31B648',
        borderTopWidth: 1,
        borderTopColor: '#e3e3e3',
        borderBottomWidth: 1,
        borderBottomColor: '#e3e3e3',
        paddingTop: 10,
        paddingBottom:10,
    },
    viewUserInfo:{
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    }
})