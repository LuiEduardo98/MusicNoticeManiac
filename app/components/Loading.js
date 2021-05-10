import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { Overlay } from 'react-native-elements'

export default function Loading(props){
    const {isVisible, text} = props
    return(
        <Overlay
            isVisible = {isVisible}
            windowBackgroundColor = 'rgba(0, 0, 0, 0.2)'
            overlayBackgroundColor = 'transparent'
            overlayStyle = {styles.overlay}
        >
            <View>
                <ActivityIndicator size='large' color='#884EA0'/>
                {text && <Text style={styles.text}>{text}</Text>}
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        height:250,
        width:150,
        backgroundColor: '#fff',
        borderColor: '#884EA0',
        borderWidth: 9,
        borderRadius: 4,
        paddingTop :50,
        paddingBottom:50
    },
    text:{
        color:'#884EA0',
        textTransform: 'uppercase',
        marginTop: 150
    }
})