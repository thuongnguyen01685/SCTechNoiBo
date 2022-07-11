//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
const PaymentOrder = () => {
  return (
    <View style={styles.container}>
      <Text>PaymentOrder</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});

//make this component available to the app
export default PaymentOrder;
