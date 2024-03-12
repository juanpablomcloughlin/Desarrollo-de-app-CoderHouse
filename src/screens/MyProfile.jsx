import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors';
import { useSelector } from 'react-redux';

const MyProfile = ({navigation}) => {
    const image = useSelector((state) => state.authReducer.value.imageCamera)

  return (
    <View style={styles.container}>
        {image ? (
            <Image source={{uri: image}} resizeMode='cover' style={styles.image} />
        ) : (
            <>
        <Image
            source={require("../../assets/defaultProfile.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </>
        )}
          <Pressable style={styles.button} onPress={()=> navigation.navigate("Image Selector")}>
            <Text style={styles.text}> Add profile picture </Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=> navigation.navigate("Location Selector")}>
            <Text style={styles.text}> My addresses </Text>
          </Pressable>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    container: {
      padding: 10,
      gap: 15,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    image: {
      width: 100,
      height: 100,
    },
    button: {
      width: "80%",
      elevation: 10,
      backgroundColor: colors.gris_fondo,
      justifyContent: "center",
      alignItems: "center",
      padding: 8,
    },
    text: {
      fontFamily: "AbeezeeRegular",
      fontSize: 18,
      color: "white",
    },
  });