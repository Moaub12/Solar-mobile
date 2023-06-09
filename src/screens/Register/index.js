import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { emailValidator } from '../../helpers/emailValidator';
import { passwordValidator } from '../../helpers/passwordValidator';
import { nameValidator } from '../../helpers/nameValidator';
import styles from './styles';
export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [repeatPassword, setRepeatPassword] = useState({ value: '', error: '' });
  const [Phone,setPhone]=useState("")
  const [Username,setUsername]=useState("");
  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const repeatPasswordError = password.value !== repeatPassword.value ? "Passwords don't match" : '';
   
    if (emailError || passwordError || nameError || repeatPasswordError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setRepeatPassword({ ...repeatPassword, error: repeatPasswordError });
      return;
    }else{
      navigation.navigate('Login')
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Background>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Header>Create Account</Header>
          <TextInput
            label="Name"
            returnKeyType="next"
            value={name.value}
            onChangeText={(text) => setName({ value: text, error: '' })}
            error={!!name.error}
            errorText={name.error}
            style={styles.localtextinput}
          />
           <TextInput
            label="username"
            returnKeyType="next"
            value={Username}
            onChangeText={(username) =>setUsername(username)}
            style={styles.localtextinput}
          />
          <TextInput
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            style={styles.localtextinput}
          />
           <TextInput
            label="phone"
            returnKeyType="next"
            value={Phone}
            onChangeText={(phone) =>{setPhone(phone)} }
            keyboardType="phone-pad"
            style={styles.localtextinput}
          />
          <TextInput
            label="phone"
            returnKeyType="next"
            value={Phone}
            onChangeText={(phone) =>{setPhone(phone)} }
            keyboardType="phone-pad"
            style={styles.localtextinput}
          />
          <TextInput
            label="phone"
            returnKeyType="next"
            value={Phone}
            onChangeText={(phone) =>{setPhone(phone)} }
            keyboardType="phone-pad"
            style={styles.localtextinput}
          />
          <TextInput
            label="Password"
            returnKeyType="next"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
            style={styles.localtextinput}
          />
          <TextInput
            label="Repeat Password"
            returnKeyType="done"
            value={repeatPassword.value}
            onChangeText={(text) => setRepeatPassword({ value: text, error: '' })}
            error={!!repeatPassword.error}
            errorText={repeatPassword.error}
            secureTextEntry
            style={styles.localtextinput}
          />
          <Button mode="contained" onPress={onSignUpPressed} style={styles.button}>
            Sign Up
          </Button>
          <View style={styles.row}>
            <Text style={styles.text}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.replace('Login')}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Background>
    </SafeAreaView>
  );
}

