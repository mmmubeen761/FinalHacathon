import React from 'react';
import { View, StyleSheet, Image,ImageBackground } from 'react-native';
 
function SplashScreen(props) {
    
    setTimeout(() => {
        props.navigation.navigate('Login') 
     }, 3000);
   
   
   
    return (
        <>
        <ImageBackground source={require('../images/bg.png')} style={styles.image}>

        <View style={styles.splashscreen}>
            <Image source={{uri:'https://o.remove.bg/downloads/b8cce020-134e-4a41-922c-fb9c11a7722b/9c9aefcf49d7f51f9be204b650e7362e-removebg-preview.png'}}
            style={styles.splashscreenimage}
            />
        </View>
            </ImageBackground>
        </>
    );
}


export default SplashScreen;


const styles = StyleSheet.create({
    splashscreen: {
        flex: 1,
        height:'100%',
        width:'100%',
        // backgroundColor:'#7e95e0'
    },
    splashscreenimage:{
        resizeMode: 'contain',
        flex:1,
        width:'80%',
        alignSelf:'center'
        // height:50
    }, image: {
        // flex: 1,
        resizeMode: "contain",
        // justifyContent: "center",
        height: '100%'
    },
});