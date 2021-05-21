import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { Input, Button, Avatar, Icon } from 'react-native-elements'
import Modal from '../../components/Modal'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import * as Location from 'expo-location'
import { map, size } from 'lodash'

export default function AddPlaylistForm(props){
    const {toastRef, setIsLoading, navigation} = props
    const [nameplaylist, setNameplaylist] = useState(null)
    const [genero, setgenero] = useState(null)
    const [description, setDescription] = useState(null)
    const [errorplaylist, setErrorplaylist] = useState(null)
    const [errorgenero, setErrorgenero] = useState(null)
    const [errorDescripcion, setErrorDescripcion] = useState(null)
    const [isVisibleMap, setisVisibleMap] = useState(null)
    const [locate, setLocate] = useState(null)
    const [imageSelected, setImageSelected] = useState([])

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
        <ScrollView>
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
                <Input
                placeholder='Locacion'
                containerStyle={styles.input}
                rightIcon={{
                    type:'material-community',
                    name:'account-box-multiple-outline',
                    color:'#00a680',
                    onPress:()=> setisVisibleMap(true)
                }}
                onChange={(e)=>setLocate(e.nativeEvent.text)}
            />
            <UploadImage
               toastRef={toastRef}
               imageSelected={imageSelected}
               setImageSelected={setImageSelected}
            />
            <Button
                title= 'Playlist Agre'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
            />
        </View>
        <Maps isVisibleMap={isVisibleMap} setisVisibleMap={setisVisibleMap}>
                    <Text>Listoo</Text>
        </Maps>
    </ScrollView>
    )

}

function Maps(props){
    const {isVisibleMap, setisVisibleMap} = props
    const [location, setLocation] = useState(null)

    useEffect(() => {
        (async()=>{
            const resultPermissions = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND)
            console.log(resultPermissions)
            const statusPermissions = resultPermissions.permissions.locationForeground.status
            if(statusPermissions==='granted'){
                const locate = await Location.getCurrentPositionAsync({})
                console.log(locate)
                setLocation({
                    latitude: locate.coords.latitude,
                    longitude: locate.coords.longitude
                })
            }
        })()
    }, [])

    return(
        <Modal isVisible={isVisibleMap} setIsVisible={setisVisibleMap}>
            <Text>Listo ubicacion</Text>
        </Modal>
    )
}

function UploadImage({toastRef, imageSelected, setImageSelected}){
 
    const changeAvatar= async()=>{
     const resultPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL)
     const resultPermissionsCamera = resultPermissions.permissions.mediaLibrary.status
 
     if(resultPermissionsCamera === 'denied'){
         toastRef.current.show({
             type: 'info',
             position: 'top',
             text1: 'Permissions',
             text2: 'Para agregar imagenes, es necesario aceptar los permisos',
             visibilityTime: 3000
         })
     }else{
         const result = await ImagePicker.launchImageLibraryAsync({
             allowsEditing:true,
             aspect:[4,3]
         })
         console.log(result)
         if (result.cancelled){
             toastRef.current.show({
                 type: 'info',
                 position: 'top',
                 text1: 'Cancelled',
                 text2: 'No elegiste una imagen amigo',
                 visibilityTime: 3000
             })
         } else{
             setImageSelected([...imageSelected, result.uri])
         }
     }
 }
 
     return(
         <ScrollView
             horizontal
             style={styles.viewImage}
         >
            {
                size(imageSelected) < 5 &&(
                 <Icon
                         type="material-community"
                         name="image-album"
                         color="#00a680"
                         containerStyle={styles.containerIcon}
                         onPress={ changeAvatar }
 
                     />
                     )
                }
                {
                     map(imageSelected,(imageComponent, index)=>(
                         <Avatar
                             key={index}
                             style={styles.miniatureStyle}
                             source={{uri:imageComponent}}
                             />
                     ))
                }
         </ScrollView>
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
    viewImage:{
        flexDirection: 'row',
        marginHorizontal:20,
        marginTop: 30,
    },
    containerIcon:{
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:10,
        height: 70,
        width:70,
        backgroundColor: '#00a680'
    },
    miniatureStyle:{
        width: 70,
        height: 70,
        marginRight: 20
    }
})