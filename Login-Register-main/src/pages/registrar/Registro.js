import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import registerStyles from '../../styles/register/RegisterStyles';
import * as ImagePicker from 'expo-image-picker';

function RegisterScreen(props) {
  const { navigation } = props;

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={registerStyles.container}>
      <View style={registerStyles.firstSection}>
        <Text style={registerStyles.firstText}>Sign up for a new account.</Text>
        <Text style={registerStyles.secondText}>We just need some more information</Text>
      </View>
      <View style={registerStyles.secondSection}>
        <View>
          <View style={registerStyles.spacing}>
            <Text style={registerStyles.label}>Name</Text>
            <TextInput style={registerStyles.textInput} underlineColorAndroid="pink" placeholder="Name" />
          </View>
          <View style={registerStyles.spacing}>
            <Text style={registerStyles.label}>Email Address</Text>
            <TextInput
              style={registerStyles.textInput}
              underlineColorAndroid="pink"
              placeholder="ejemplo@ejemplo.com"
              keyboardType="email-address"
              returnKeyType="next"
            />
          </View>
          <View style={registerStyles.spacing}>
            <Text style={registerStyles.label}>Password</Text>
            <TextInput
              style={registerStyles.textInput}
              underlineColorAndroid="pink"
              placeholder="*********"
              secureTextEntry={true}
            />
          </View>
          <View style={registerStyles.spacing}>
            <Text style={registerStyles.label}>Confirm Password</Text>
            <TextInput
              style={registerStyles.textInput}
              underlineColorAndroid="pink"
              placeholder="*********"
              secureTextEntry={true}
            />
          </View>
          <View style={registerStyles.spacing}>
            <TouchableOpacity style={registerStyles.button}>
              <Text style={registerStyles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[registerStyles.spacing, registerStyles.row]}>
          <View>
            <TouchableOpacity onPress={goToLogin}>
              <Text style={registerStyles.label}>Already have an account</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={registerStyles.login}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={registerStyles.imageRoll}>
        <TouchableOpacity style={registerStyles.buttonRoll} onPress={pickImage}>
          <Text style={registerStyles.textRoll}>Select a profile image</Text>
          {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 170, height: 130 }} />}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default RegisterScreen;
