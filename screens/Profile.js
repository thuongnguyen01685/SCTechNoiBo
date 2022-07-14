//import liraries
import React, { Component, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  BackHandler,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { GLOBALTYPES } from "../redux/actions/globalTypes";

// create a component
const Profile = () => {
  const { auth } = useSelector((state) => state);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.token !== null) {
      navigation.navigate("Profile");
    } else {
      navigation.navigate("Login");
    }
  }, [auth.token]);

  const handleLogout = async () => {
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
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          color: "#15294D",
          textAlign: "center",
          marginBottom: 10,
        }}>
        Thông tin cá nhân
      </Text>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <View style={styles.bgIcon}>
                <Ionicons name="person-outline" size={25} />
              </View>
              <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.title}>Tên</Text>
                <Text style={styles.content}>{auth.profile.name}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Ionicons name="create-outline" size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <View style={styles.bgIcon}>
                <Ionicons name="call-outline" size={25} />
              </View>
              <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.title}>Số điện thoại</Text>
                <Text style={styles.content}>+375 33 664-57-36</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Ionicons name="create-outline" size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <View style={styles.bgIcon}>
                <Ionicons name="mail-outline" size={25} />
              </View>
              <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.title}>Email</Text>
                <Text style={styles.content}>{auth.profile.email}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Ionicons name="create-outline" size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <View style={styles.bgIcon}>
                <Ionicons name="location-outline" size={25} />
              </View>
              <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.title}>Địa chỉ</Text>
                <Text style={styles.content}>Bradford BD1 1PR</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Ionicons name="create-outline" size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.footer}>
          <Image
            style={styles.img}
            source={require("../../assets/sonar/QRWEB.png")}
          />
        </View> */}
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  bgIcon: {
    backgroundColor: "#F7F8FB",
    borderRadius: 30,
    padding: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    alignItems: "center",
  },
  title: {
    color: "#888",
    fontSize: 12,
    fontWeight: "400",
  },
  content: {
    color: "#3a4960",
    fontSize: 14,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    padding: 30,
  },
  img: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

//make this component available to the app
export default Profile;
