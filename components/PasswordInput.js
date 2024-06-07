import React, { useState } from 'react';
import { TextInput } from 'react-native-paper'; // Make sure you have 'react-native-paper' installed
import { StyleSheet, Text, View, Pressable } from 'react-native';
const PasswordInput = (props) => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const textToShow = props?.text || 'Password';

  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>











      <TextInput style={styles.textinputcontainer} secureTextEntry={!isPasswordVisible}

        mode='outlined'
        right={
          <TextInput.Icon
            icon={isPasswordVisible ? 'eye-off' : 'eye'}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        }
        //value={password}
        onChangeText={text => props.setPassword(text)} placeholder={textToShow} value={props.value} />


    </View>



  );
};
const styles = StyleSheet.create({
  textinputcontainer: {

    borderColor: '#545464',
    width: 336,
    height: 50,
    justifyContent: 'center',


    //padding: 8,
    fontSize: 16,
    //color: '#E747CD',
    backgroundColor: 'white',
  },
  text: {
    //color: 'white',
    fontSize: 17,
    textTransform: 'capitalize',
    padding: 6,
  },
});



export default PasswordInput;
