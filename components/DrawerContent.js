//import liraries
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Drawer } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
const DrawerContent = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Image
            style={{
              width: 120,
              height: 120,
              resizeMode: "contain",
              margin: 5,
            }}
            source={require("../assets/icon-a.png")}
          />
        </View>
        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            )}
            label="Trang chủ"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons name="add-circle-outline" color={color} size={size} />
            )}
            label="Yêu cầu mua hàng"
            onPress={() => {
              props.navigation.navigate("PurchasesScreen");
            }}
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons
                name="checkmark-circle-outline"
                color={color}
                size={size}
              />
            )}
            label="Yêu cầu đã duyệt"
            onPress={() => {
              props.navigation.navigate("ApprovedScreen");
            }}
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons name="close-circle-outline" color={color} size={size} />
            )}
            label="Yêu cầu bị từ chối"
            onPress={() => {
              props.navigation.navigate("DeniedScreen");
            }}
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons name="cash-outline" color={color} size={size} />
            )}
            label="Đề nghị thanh toán"
            onPress={() => {
              props.navigation.navigate("PaymentOrderScreen");
            }}
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons name="card-outline" color={color} size={size} />
            )}
            label="Đề nghị tạm ứng"
            onPress={() => {
              props.navigation.navigate("AdvancesScreen");
            }}
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons
                name="person-circle-outline"
                color={color}
                size={size}
              />
            )}
            label="Thông tin cá nhân"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

//make this component available to the app
export default DrawerContent;
