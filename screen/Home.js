import React from 'react'
import { StyleSheet, Text, View, Button, Platform, Image } from 'react-native';
import  {StatusBar} from 'expo-status-bar'


export default function HomeScreen({navigation, route}) {
    console.log(navigation);
    console.log(route);

    return (
        <View>
            {/*<Text>The Home Screen on {Platform.OS}</Text>*/}
            <Text style ={styles.textContainer}>Welcome to The Cannabis Home page on {Platform.OS}</Text>
            <Image style ={styles.imgContainer} source ={{uri:"https://images.unsplash.com/photo-1602168431602-9bfa3722a472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbm5hYmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" }} 
            />
            <StatusBar style="auto" /> 
            <Text style ={styles.paraContainer}>Kindly click on the list tab bar to see a collection of our finest brands of cannabis, their type and medical use.</Text>   
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    textContainer:{
        fontWeight:'900',
        textAlign:'center',
        paddingTop:30,
        color:'green',
    },
    imgContainer:{
        height:400,
        width:300,
        marginTop: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        
    },
    paraContainer:{
        fontWeight:'500',
        textAlign:'center',
        paddingTop:30,
        color:'green' 
    }
});
