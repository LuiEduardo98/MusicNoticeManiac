import React, {useState, useRef} from 'react'
import {View, Text} from 'react-native'
import Loading from '../../components/Loading'
import Toast from 'react-native-toast-message'
import AddPlaylistForm from './AddPlaylistForm'
import {useNavigation} from '@react-navigation/native'


export default function AddPlayList(){
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()
    const toastRef = useRef()
    return(
        <View>
            <AddPlaylistForm toastRef={toastRef} setIsLoading={setIsLoading} navigation={navigation}/>
            <Loading isVisible={isLoading} text={'Espere un momento...'}/>
            <Toast ref={toastRef}/>
        </View>
    )
}