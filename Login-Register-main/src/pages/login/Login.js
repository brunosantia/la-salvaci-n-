import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native';
import loginStyles from '../../styles/login/LoginStyles';
import registerStyles from '../../styles/register/RegisterStyles';

function LoginScreen(props) {
  const { navigation } = props;

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={loginStyles.container}>
      <View style={loginStyles.firstSection}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2017/09/08/17/05/elephant-2729413_1280.jpg',
          }}
          style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
        />
        <View style={{ position: 'absolute' }}>
          <Text style={loginStyles.title}>Trevelo</Text>
        </View>
      </View>
      <View style={loginStyles.secondSection}>
        <View>
          <View style={loginStyles.spacing}>
            <Text style={loginStyles.label}>Email Address</Text>
            <TextInput
              style={loginStyles.textInput}
              underlineColorAndroid="pink"
              placeholder="ejemplo@ejemplo.com"
              keyboardType="email-address"
              returnKeyType="next"
            />
          </View>
          <View style={loginStyles.spacing}>
            <Text style={loginStyles.label}>Password</Text>
            <TextInput
              style={loginStyles.textInput}
              underlineColorAndroid="pink"
              placeholder="*********"
              secureTextEntry={true}
            />
          </View>
          <View style={loginStyles.spacing}>
            <Text style={loginStyles.forgotPassword}>Forgot Password</Text>
          </View>
          <View style={loginStyles.spacing}>
            <TouchableOpacity style={loginStyles.button}>
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[loginStyles.spacing, loginStyles.row]}>
          <View>
            <TouchableOpacity onPress={goToRegister}>
              <Text style={loginStyles.label}>Don't have an account</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={loginStyles.signUp}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
