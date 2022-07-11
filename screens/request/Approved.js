//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

// create a component
const Approved = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={25} color="#000000" />
          </TouchableOpacity>
          <Text
            style={{
              left: "15%",
              fontSize: 15,
              color: "#15294D",
              fontWeight: "700",
            }}>
            Yêu cầu đã duyệt
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon name="filter" size={15} color="#15294D" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View
          style={{ padding: 5, borderBottomWidth: 0.5, flexDirection: "row" }}>
          <View>
            <Text style={styles.textContent}>Đơn hàng: 3642</Text>
            <Text style={styles.textContent}>Nhà cung cấp: Xuân Trường</Text>
            <Text style={styles.textContent}>Ngày duyệt: 6/7/2022</Text>

            <Text style={styles.textSum}>Tổng tiền: 65.000 VND</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "20%",
            }}>
            <Text style={{ color: "#1B9927", textAlign: "right" }}>
              Đã duyệt
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#15294D",
                borderRadius: 5,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginTop: "20%",
              }}
              onPress={() => navigation.navigate("DetailApp")}>
              <Text style={{ fontSize: 10, color: "#ffffff" }}>
                Xem chi tiết
              </Text>
              <Ionicons
                name="arrow-forward-outline"
                size={10}
                color="#ffffff"
                style={{ left: 5 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5",
  },
  textContent: {
    fontSize: 12,
    color: "#000000",
    fontWeight: "500",
    marginTop: 15,
  },
  textSum: {
    marginTop: 15,
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 10,
  },
});

//make this component available to the app
export default Approved;
