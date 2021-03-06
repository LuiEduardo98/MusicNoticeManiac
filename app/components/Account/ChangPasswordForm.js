import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Icon} from 'react-native-elements'
import firebase from 'firebase'

export default function ChangePasswordForm(props){
    const {email, setShowModal, toastRef, setreLoadUserInfo} = props
    const [newPass, setnewPass] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)
    const [errorPass, setErrorPass] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    
    

    const onSubmit = ()=>{
        setError(null)
        if(!newPass){
            setError('El password no puede ser vacio')
            
        } else if(password === newPass){
            setError('El password no puede ser igual')
        }else if(newPass.length < 6){
            setError('La contraseña debe tener almenos 6 digitos')
        }else if(!password){
            setErrorPass('Ingrese la contraseña')
        } else{
            setIsLoading(true)     
            console.log(newPass)
            
            var user = firebase.auth().currentUser;
            const credential = firebase.auth.EmailAuthProvider.credential(
                email,
                password
            )
                    
                    
            user.reauthenticateWithCredential(credential).then(function() {
                firebase   
                .auth()
                .currentUser.updatePassword(newPass)
                .then(()=>{
                    console.log('Esta bien desde firebase')
                    console.log(newPass)
                    setIsLoading(false)
                    setreLoadUserInfo(true)
                    setShowModal(false)
                })   
                .catch((error)=>{
                    console.log(error)

                    setIsLoading(false)
                })    
            }).catch(function(error) {
                setIsLoading(false)
                setErrorPass('El password no es correcto')

            });
            
        }
    }

    return(
        <View style={styles.view}>
            <Input
                placeholder='Contraseña Nueva'
                containerStyle={styles.input}
                containerStyle={styles.input}
                password={true}
                secureTextEntry={!showPassword}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                    
                }
                onChange={(e)=>setnewPass(e.nativeEvent.text)}
                errorMessage={error}
            />
            <Input
                placeholder='Contraseña Antigua'
                containerStyle={styles.input}
                password={true}
                secureTextEntry={!showPassword}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                    
                }
                onChange={(e)=>setPassword(e.nativeEvent.text)}
                errorMessage={errorPass}
            />

            <Button
                title= 'Cambiar password'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
                loading={isLoading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10
    },
    view:{
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    btnContainer:{
        marginTop:20,
        width:'95%'
    },
    btn:{
        backgroundColor: '#00a680'
    },
    icon:{
        color:'#fff'
    }
})