import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UserGuest(){
    const navigation= useNavigation()
    console.log(navigation)
    
    return(
        <ScrollView style={styles.container}>
            <Image
                style={styles.stretch}
                source={require('../../../assets/img/User.png')}
            />
            <Text style={styles.title}>Ingresa Porfavor</Text>
            <Text style={styles.description}>
                Busca y escucha las mejores playlist del momento
            </Text>
            <View style={styles.viewBtn}>
                <Button
                    title='ver perfil'
                    buttonStyle={styles.btnSyle}
                    containerStyle={styles.bntContainer}
                    onPress={()=>navigation.navigate('login')}
                    />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 10
    },
    stretch:{
        width: '100%',
        height:98,
        resizeMode: 'contain',
        marginBottom: 40
    },
    title:{
        fontWeight:'bold',
        fontSize:19,
        marginBottom:10,
        textAlign: 'center'
    },
    description:{
        marginBottom: 20,
        textAlign: 'center'
    },
    viewBtn: {
        flex: 1,
        alignItems: 'center'
    },
    btnStyle:{
        backgroundColor: '#00a680'
    },
    bntContainer:{
        width: '70%'
    }
})