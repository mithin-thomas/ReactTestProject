import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class TextField extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         name: 'User'
      };
   }

   render() {
      const {textChanged}=this.props
      return (
         <View style={styles.fieldView}>
            <TextInput
            style={styles.field}
            placeholder={this.props.placeHolderValue}
            maxLength={40}
            onChangeText={(text)=> this.setState({name: text})}
            onEndEditing={()=>textChanged? textChanged(this.state.name):null}
            ></TextInput>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   fieldView: {
      marginBottom: 5,
      marginTop: 5,
      marginLeft: 5,
      marginRight: 5,
      borderWidth: 1,
      height: 50,
      borderRadius:10
   },
   field: {
      justifyContent: 'center',
      height: 40,
      paddingTop: 5,
      paddingLeft: 5,
      paddingRight: 5
   }
});