import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { validateEmail } from '../../utils/validation'
import firebase from 'firebase'
import {useNavigation} from '@react-navigation/native'

export default function LoginForm(props){
    const {toastRef} = props
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const navigation = useNavigation()

    const onSubmit = () => { 
        if(formData.email.length===0||formData.password.length===0){
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Empty',
                text2: 'Todos los campos son requirodos👋',
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 30,
                bottomOffset: 40,
                onShow: () => {},
                onHide: () => {},
                onPress: () => {}
              });
        } else if (!validateEmail(formData.email)){
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Password',
                text2: 'El email no es valido👋',
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 30,
                bottomOffset: 40,
                onShow: () => {},
                onHide: () => {},
                onPress: () => {}
              });
        } else if (formData.password.length < 6){
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Password',
                text2: 'Las contraseñas deben contar con 6 digitos👋',
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 30,
                bottomOffset: 40,
                onShow: () => {},
                onHide: () => {},
                onPress: () => {}
              });
        }  else {
            console.log('Todo correcto')
            firebase
            .auth()
            .signInWithEmailAndPassword(formData.email, formData.password)
            .then((response)=>{
                console.log(response)
                navigation.navigate('home')
            })
            .catch((err)=>{
                console.log(err)
                toastRef.current.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Empty',
                    text2: 'El correo o contraseña incorrecta',
                    visibilityTime: 3000,
                    autoHide: true,
                    topOffset: 30,
                    bottomOffset: 40,
                    onShow: () => {},
                    onHide: () => {},
                    onPress: () => {}
                  });
            })
        }
    }

    const onChange = (e, type) => {
        //console.log(type)
        //console.log(e.nativeEvent.text)
        //setFormData({[type]: e.nativeEvent.text})
        setFormData({ ...formData, [type]: e.nativeEvent.text})
    }

    return(
        <View style={styles.formContainer}>
            <Input
                placeholder='Correo electronico'
                containerStyle={styles.inputForm}
                onChange={(e)=>onChange(e, 'email')}
                rightIcon={<Icon type='material-community' name='at' iconStyle={styles.iconRight} />}
            />
            <Input
                placeholder='Contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false : true}
                onChange={(e)=>onChange(e, 'password')}
                rightIcon={<Icon 
                    type='material-community' 
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'} 
                    iconStyle={styles.iconRight}
                    onPress={()=> setShowPassword(!showPassword)} 
            />}    
            />
            <Button
                title='Inicia sesion'
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            />
        </View>
    )
}

function defaultFormValues(){
    return{
        email: '',
        password: '',
        repeatPassword: ''
    }
}

const styles = StyleSheet.create({
    formContainer:{
        marginTop: 20
    },
    inputForm:{
        width: '100%',
        marginTop: 20
    },
    btnContainerRegister:{
        marginTop: 20,
        width: '95%'
    },
    btnRegister:{
        backgroundColor: '#3333FF'
    },
    iconRight:{
        color: '#c1c1c1'
    }
})