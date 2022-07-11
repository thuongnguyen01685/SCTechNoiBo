//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
const TouchPerson = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Profile");
      }}>
      <Ionicons
        name="person"
        size={25}
        style={{ paddingLeft: 10 }}
        color="#3a4960"
      />
    </TouchableOpacity>
  );
};

//make this component available to the app
export default TouchPerson;
