import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { Overlay } from 'react-native-elements'

export default function Loading(props){
    const { isVisible, text} = props
    return(
        <Overlay
            isVisible={isVisible}
            windowBackGroundColor='rgba(0,0,0,1)'
            overlayBackGroundColor='transparent'
            overlayStyle={styles.overlay}
        >
        <View>
            {<ActivityIndicator size='large' color='#4ED975'/>}
            {text && <Text style={styles.text}>{text}</Text>}
        </View>
        </Overlay>
    )

}

const styles = StyleSheet.create({
    overlay:{
        height:'auto',
        width:'90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#4ED975',
        borderWidth: 2,
        borderRadius: 10,

    
    },
    text:{
        color:'#4ED975',
        textTransform: 'uppercase',
        marginTop: 10,
        fontSize: 30,
        paddingVertical: 10,
        alignSelf: 'center',
        textAlign: 'center',
    }
})