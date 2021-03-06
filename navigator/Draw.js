//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
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
import DrawerContent from "../components/DrawerContent";
import DetailPayment from "../screens/details/DetailPayment";
import Advances from "../screens/request/Advances";
import DetailAdvances from "../screens/details/DetailAdvances";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function PurchasesScreen() {
  return (
    <Stack.Navigator initialRouteName="Purchases">
      <Stack.Screen
        name="Purchases"
        component={Purchases}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailPur"
        component={DetailPur}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function ApprovedScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Approved"
        component={Approved}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailApp"
        component={DetailApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function DeniedScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Denied"
        component={Denied}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function PaymentOrderScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PaymentOrder"
        component={PaymentOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailPayment"
        component={DetailPayment}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AdvancesScreen() {
  return (
    <Stack.Navigator initialRouteName="Advances">
      <Stack.Screen
        name="Advances"
        component={Advances}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailAdvances"
        component={DetailAdvances}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
// create a component
const Draw = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Trang Ch???",
          headerTitle: () => (
            <Image
              style={{
                width: 55,
                height: 55,
                resizeMode: "contain",
                margin: 5,
              }}
              source={require("../assets/icon-a.png")}
            />
          ),

          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <TouchPerson />
              <TouchNotify />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="PurchasesScreen"
        component={PurchasesScreen}
        options={{
          title: "Y??u c???u mua h??ng",
          headerTitle: () => (
            <Image
              style={{
                width: 55,
                height: 55,
                resizeMode: "contain",
                margin: 5,
              }}
              source={require("../assets/icon-a.png")}
            />
          ),

          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <TouchPerson />
              <TouchNotify />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="ApprovedScreen"
        component={ApprovedScreen}
        options={{
          title: "Y??u c???u ???? duy???t",

          headerTitle: () => (
            <Image
              style={{
                width: 55,
                height: 55,
                resizeMode: "contain",
                margin: 5,
              }}
              source={require("../assets/icon-a.png")}
            />
          ),

          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <TouchPerson />
              <TouchNotify />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="DeniedScreen"
        component={DeniedScreen}
        options={{
          title: "Y??u c???u b??? t??? ch???i",

          headerTitle: () => (
            <Image
              style={{
                width: 55,
                height: 55,
                resizeMode: "contain",
                margin: 5,
              }}
              source={require("../assets/icon-a.png")}
            />
          ),

          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <TouchPerson />
              <TouchNotify />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="PaymentOrderScreen"
        component={PaymentOrderScreen}
        options={{
          title: "????? ngh??? thanh to??n",

          headerTitle: () => (
            <Image
              style={{
                width: 55,
                height: 55,
                resizeMode: "contain",
                margin: 5,
              }}
              source={require("../assets/icon-a.png")}
            />
          ),

          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <TouchPerson />
              <TouchNotify />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Th??ng tin c?? nh??n",
          headerTitle: () => (
            <Image
              style={{
                width: 55,
                height: 55,
                resizeMode: "contain",
                margin: 5,
              }}
              source={require("../assets/icon-a.png")}
            />
          ),

          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <TouchPerson />
              <TouchNotify />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="AdvancesScreen"
        component={AdvancesScreen}
        options={{
          title: "???? ngh??? t???m ???ng",

          headerTitle: () => (
            <Image
              style={{
                width: 55,
                height: 55,
                resizeMode: "contain",
                margin: 5,
              }}
              source={require("../assets/icon-a.png")}
            />
          ),

          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <TouchPerson />
              <TouchNotify />
            </View>
          ),
        }}
      />
      {/* <Stack.Screen
          name="TabBar"
          component={TabBar}
          options={{ headerShown: false }}
        />  */}
    </Drawer.Navigator>
  );
};

//make this component available to the app
export default Draw;
