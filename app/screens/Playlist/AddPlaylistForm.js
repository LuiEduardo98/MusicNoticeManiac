import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Input, Button } from 'react-native-elements'

export default function AddPlaylistForm(props){
    const {toastRef, setIsLoading, navigation} = props
    const [nameplaylist, setNameplaylist] = useState(null)
    const [genero, setgenero] = useState(null)
    const [description, setDescription] = useState(null)
    const [errorplaylist, setErrorplaylist] = useState(null)
    const [errorgenero, setErrorgenero] = useState(null)
    const [errorDescripcion, setErrorDescripcion] = useState(null)

    const onSubmit = ()=>{
        
        if(!nameplaylist && !genero && !description){
            setErrorplaylist('Nombre del playlist')
            setErrorgenero('Nombre de la genero')
            setErrorDescripcion('Descripcion')
        }else if(!genero && !description){
            setErrorplaylist(null)
            setErrorgenero('Nombre de la genero')
            setErrorDescripcion('Descripcion')
        }else if(!nameplaylist && !description){
            setErrorplaylist('Nombre del playlist')
            setErrorgenero(null)
            setErrorDescripcion('Descripcion')
        }else if(!genero && !nameplaylist){
            setErrorplaylist('Nombre del playlist')
            setErrorgenero('Nombre de la genero')
            setErrorDescripcion(null)
        }else if(!nameplaylist){
            setErrorplaylist('Nombre del playlist')
            setErrorgenero(null)
            setErrorDescripcion(null)
        }else if(!genero){
            setErrorplaylist(null)
            setErrorgenero('Nombre de la genero')
            setErrorDescripcion(null)
        }else if(!description){
            setErrorplaylist(null)
            setErrorgenero(null)
            setErrorDescripcion('Descripcion')
        }else{
            setErrorplaylist(null)
            setErrorgenero(null)
            setErrorDescripcion(null)
            console.log('Nombre del playliste:', nameplaylist)
            console.log('Nombre de la genero:', genero)
            console.log('Descripción del producto:', description)
            toastRef.current.show({
                type: 'success',
                position: 'top',
                text1: '¡Listo!',
                text2: 'Todo correcto amigo',
                visibilityTime: 3000
            })
        }
    }
    return(
        <View style={styles.view}>
            <Input
                placeholder='Nombre del Playlist'
                placeholderTextColor="#78c4d4"
                containerStyle={styles.input}
                rightIcon={{
                    type:'material-community',
                    name:'music-box-multiple-outline',
                    color:'#00a680'
                }}
                onChange={(e)=>setNameplaylist(e.nativeEvent.text)}
                errorMessage={errorplaylist}
            />
            <Input
                placeholder='Genero'
                placeholderTextColor="#78c4d4"
                containerStyle={styles.input}
                rightIcon={{
                    type:'material-community',
                    name:'music-circle-outline',
                    color:'#00a680'
                }}
                onChange={(e)=>setgenero(e.nativeEvent.text)}
                errorMessage={errorgenero}
            />
                <Input
                placeholder='Descripción'
                placeholderTextColor="#78c4d4"
                containerStyle={styles.input}
                rightIcon={{
                    type:'material-community',
                    name:'account-multiple-plus',
                    color:'#00a680'
                }}
                onChange={(e)=>setDescription(e.nativeEvent.text)}
                errorMessage={errorDescripcion}
            />
            <Button
                title= 'Cambiar Nombre'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
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
    }
})