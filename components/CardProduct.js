//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// import { useDispatch } from "react-redux";
// import { getItemProduct } from "../../Redux/actions/productAction";
// import { URL } from "../../utils/fetchApi";

// create a component
const CardProduct = ({ item, img, nameCard, link }) => {
  //   const dispatch = useDispatch();
  //   const handleDeltais = (id) => {
  //     navigation.navigate("Order");
  //     dispatch(getItemProduct(id));
  //   };

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        height: 160,
        padding: 35,
        backgroundColor: "#F8F8F8",
        flexBasis: "40%",
        borderRadius: 10,
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 40,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
      onPress={() => navigation.navigate(`${link}`)}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
        }}>
        <Image
          style={styles.img}
          //   source={{
          //     uri: `${URL}/`.concat(`${item.picture}`),
          //   }}
          source={img}
        />
        <View style={styles.content}>
          <Text
            style={{
              fontSize: 12,
              color: "#15294D",
              fontWeight: "700",
              textAlign: "center",
            }}>
            {nameCard}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  img: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderRadius: 10,
    left: "20%",
  },
  wrapper: {
    flexDirection: "row",
  },
  Card: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 31,
  },
  content: {
    marginTop: 20,
  },
});

//make this component available to the app
export default CardProduct;
