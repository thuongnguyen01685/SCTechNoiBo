//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GLOBALTYPES } from "../redux/actions/globalTypes";
import TouchNotify from "../components/notifyModal";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen() {
  const navigation = useNavigation();
  const { auth, notify } = useSelector((state) => state);
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("@token_key");
      alert("Đăng xuất thành công");
      // console.log("Token removed");
      dispatch({ type: GLOBALTYPES.AUTH, payload: null });
      // BackHandler.exitApp();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          headerLeft: () => (
            <View>
              <Text
                style={{ fontSize: 14, fontWeight: "500", color: "#D8D8D8" }}>
                Xin chào!
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "#3A4960",
                }}>
                {auth.profile.name}
              </Text>
            </View>
          ),
          headerRight: () => (
            <>
              <TouchNotify />
              {/* <TouchableOpacity>
                <View>
                  <Ionicons
                    name="notifications-outline"
                    size={25}
                    style={{
                      paddingTop: 10,
                      paddingLeft: 10,
                      right: 20,
                    }}
                    color="#3a4960"
                  />
                  {notify.getNotify.length > 0 ? (
                    <Text
                      style={{
                        position: "absolute",
                        backgroundColor: "#E01013",
                        color: "#ffffff",
                        left: 4,
                        top: 7,
                        fontSize: 10,
                        paddingRight: 4,
                        paddingLeft: 4,
                        borderRadius: 20,
                      }}>
                      {notify.getNotify.length}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        position: "absolute",
                        color: "#ffffff",
                        left: 4,
                        top: 7,
                        fontSize: 10,
                        paddingRight: 4,
                        paddingLeft: 4,
                        borderRadius: 20,
                      }}>
                      {""}
                    </Text>
                  )}
                </View>
              </TouchableOpacity> */}
              <TouchableOpacity onPress={logout}>
                <Ionicons
                  name="log-out-outline"
                  size={25}
                  style={{ paddingTop: 10, paddingLeft: 10 }}
                  color="#3a4960"
                />
              </TouchableOpacity>
            </>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
// create a component
const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeScreen") {
            iconName = focused ? "home-outline" : "home-outline";
          }
          //   if (route.name === "Product") {
          //     iconName = focused ? "medkit-outline" : "medkit-outline";
          //   }
          //   if (route.name === "GiftScreen") {
          //     iconName = focused ? "gift-outline" : "gift-outline";
          //   }

          //   if (route.name === "OrderScreen") {
          //     iconName = focused ? "receipt-outline" : "receipt-outline";
          //   }

          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: "#3a4960",
        tabBarInactiveTintColor: "#D8D8D8",
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          bottom: 10,
          right: 16,
          left: 16,
          borderRadius: 15,
          paddingBottom: 5,
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Trang chủ" }}
      />
      {/* <Tab.Screen
        name="Product"
        component={Product}
        options={{ title: "Sản phẩm" }}
      />
      <Tab.Screen
        name="GiftScreen"
        component={GiftScreen}
        options={{ title: "Điểm thưởng" }}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{ title: "Đơn hàng" }}
      /> */}
    </Tab.Navigator>
  );
};

//make this component available to the app
export default TabBar;
