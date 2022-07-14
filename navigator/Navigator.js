//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Login from "../screens/Login";
// import TabBar from "./TabBar";
import Home from "../screens/Home";
import TouchNotify from "../components/notifyModal";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Profile from "../screens/Profile";
import TouchPerson from "../components/TouchPerson";
import Approved from "../screens/request/Approved";
import PaymentOrder from "../screens/request/PaymentOrder";
import Purchases from "../screens/request/Purchases";
import Denied from "../screens/request/Denied";
import DetailPur from "../screens/details/DetailPur";
import DetailApp from "../screens/details/DetailApp";
import Draw from "./Draw";

const Stack = createNativeStackNavigator();

// create a component
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerLeft: () => (
              <TouchableOpacity>
                <Ionicons
                  name="menu-outline"
                  size={30}
                  color="#15294D"
                  style={{}}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Image
                style={{
                  width: 55,
                  height: 55,
                  resizeMode: "contain",
                  margin: 5,
                }}
                source={require("../assets/logo2.png")}
              />
            ),
            headerBackVisible: false,
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerRight: () => (
              <>
                <TouchPerson />
                <TouchNotify />
              </>
            ),
          }}
        />

        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen
          name="Approved"
          component={Approved}
          options={{
            title: "",
            headerLeft: () => (
              <TouchableOpacity>
                <Ionicons
                  name="menu-outline"
                  size={30}
                  color="#15294D"
                  style={{}}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Image
                style={{
                  width: 55,
                  height: 55,
                  resizeMode: "contain",
                  margin: 5,
                }}
                source={require("../assets/logo2.png")}
              />
            ),
            headerBackVisible: false,
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerRight: () => (
              <>
                <TouchPerson />
                <TouchNotify />
              </>
            ),
          }}
        />
        <Stack.Screen
          name="DetailApp"
          component={DetailApp}
          options={{
            title: "",
            headerLeft: () => (
              <TouchableOpacity>
                <Ionicons
                  name="menu-outline"
                  size={30}
                  color="#15294D"
                  style={{}}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Image
                style={{
                  width: 55,
                  height: 55,
                  resizeMode: "contain",
                  margin: 5,
                }}
                source={require("../assets/logo2.png")}
              />
            ),
            headerBackVisible: false,
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerRight: () => (
              <>
                <TouchPerson />
                <TouchNotify />
              </>
            ),
          }}
        />
        <Stack.Screen
          name="Denied"
          component={Denied}
          options={{
            title: "",
            headerLeft: () => (
              <TouchableOpacity>
                <Ionicons
                  name="menu-outline"
                  size={30}
                  color="#15294D"
                  style={{}}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Image
                style={{
                  width: 55,
                  height: 55,
                  resizeMode: "contain",
                  margin: 5,
                }}
                source={require("../assets/logo2.png")}
              />
            ),
            headerBackVisible: false,
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerRight: () => (
              <>
                <TouchPerson />
                <TouchNotify />
              </>
            ),
          }}
        />

        <Stack.Screen
          name="Purchases"
          component={Purchases}
          options={{
            title: "",
            headerLeft: () => (
              <TouchableOpacity>
                <Ionicons
                  name="menu-outline"
                  size={30}
                  color="#15294D"
                  style={{}}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Image
                style={{
                  width: 55,
                  height: 55,
                  resizeMode: "contain",
                  margin: 5,
                }}
                source={require("../assets/logo2.png")}
              />
            ),
            headerBackVisible: false,
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerRight: () => (
              <>
                <TouchPerson />
                <TouchNotify />
              </>
            ),
          }}
        />
        <Stack.Screen
          name="DetailPur"
          component={DetailPur}
          options={{
            title: "",
            headerLeft: () => (
              <TouchableOpacity>
                <Ionicons
                  name="menu-outline"
                  size={30}
                  color="#15294D"
                  style={{}}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Image
                style={{
                  width: 55,
                  height: 55,
                  resizeMode: "contain",
                  margin: 5,
                }}
                source={require("../assets/logo2.png")}
              />
            ),
            headerBackVisible: false,
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerRight: () => (
              <>
                <TouchPerson />
                <TouchNotify />
              </>
            ),
          }}
        />

        <Stack.Screen
          name="PaymentOrder"
          component={PaymentOrder}
          options={{
            title: "",
            headerLeft: () => (
              <TouchableOpacity>
                <Ionicons
                  name="menu-outline"
                  size={30}
                  color="#15294D"
                  style={{}}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Image
                style={{
                  width: 55,
                  height: 55,
                  resizeMode: "contain",
                  margin: 5,
                }}
                source={require("../assets/logo2.png")}
              />
            ),
            headerBackVisible: false,
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerRight: () => (
              <>
                <TouchPerson />
                <TouchNotify />
              </>
            ),
          }}
        /> */}

        {/* <Stack.Screen
          name="TabBar"
          component={TabBar}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Draw"
          component={Draw}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Navigator;
