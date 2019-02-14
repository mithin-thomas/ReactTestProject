/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import TextField from './Components/TextField/TextField'

export default class App extends React.Component {

   constructor() {
      super();
      this.state = {
         name: 'User'
      };
   }

   tryLogin() {
      console.log('tryLogin')
   }

   textChanged(text){
      this.setState({name: text})
   }

   render() {
      return (
      <SafeAreaView style={styles.mainView}>
         <View>
            <TextField 
               textChanged={(text) => this.textChanged(text)} 
               placeHolderValue='Please enter email' 
            ></TextField>

            <TextField 
               textChanged={(text) => this.textChanged(text)} 
               placeHolderValue='Please enter password' 
            ></TextField>
            <Button
               style={styles.loginButton}
               onPress={()=>this.tryLogin()}
               title='Login'
               color='black'
               underlayColor='red'
               accessibilityLabel="Learn more about this purple button"
            />
         </View>
      </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   mainView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      borderWidth: 20,
      borderColor: 'white'
   },
   greetingText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
   },
   loginButton: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      height: 40,
      paddingTop: 5,
      paddingLeft: 5,
      paddingRight: 5,
      borderRadius:10
   }
});
