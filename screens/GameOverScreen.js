import React from 'react';
import {View,Text,StyleSheet,Button,Image,Dimensions,ScrollView} from 'react-native';
import color from '../constants/color';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';



const GameOverScreen = props =>{
    return(
        <ScrollView>
        <View style={styles.screen}>
            <Text style={{...DefaultStyles.title, ...styles.gameOverTitle}}>The Game is Over!</Text>
            <View style={styles.imageContainer}>
            <Image 
            //For local Image
            // source={require('../assets/success.png')} 

            //For web images
            source={{uri:'https://pbs.twimg.com/profile_images/657603448553127936/D7T9j7Pk_400x400.png'}}
            style={styles.image}
            resizeMode='cover'    
            />
            </View>
            <View style={styles.gameOverDetails}>
            <Text style={DefaultStyles.title}>Number of Rounds : <Text style={styles.highlight}>{props.roundsNumber}</Text></Text>
            <Text style={DefaultStyles.title}>Number was : <Text style={styles.highlight}>{props.userNumber}</Text></Text>
            </View>
            <MainButton color={color.primary} onPress={props.onRestart}>New Game</MainButton>
        </View>
        </ScrollView>
        
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        paddingVertical: 10

    },
    imageContainer:{
        // width:300,
        // height:300,
        // borderRadius:150,
        width:Dimensions.get('window').width * 0.7,
        height:Dimensions.get('window').width * 0.7,
        borderRadius:Dimensions.get('window').width * 0.7 / 2,
        borderWidth:3,
        borderColor:'black',
        overflow:'hidden',
        // marginVertical:30,
        marginVertical:Dimensions.get('window').height / 20
    },
    image:{
        width:'100%',
        height:'100%'
    },
    highlight:{
        color:color.primary,
        
    },
    gameOverTitle:{
        fontSize:25
    },
    gameOverDetails:{
        marginVertical:30
        
    }
});

export default GameOverScreen;

