//import liraries
import React, { Component, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deApproved, getApproved } from "../../redux/actions/approvedAction";

// create a component
const Approved = () => {
  const { approved } = useSelector((state) => state);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    async function it() {
      const token = await AsyncStorage.getItem("@token_key");
      await dispatch(getApproved(token, "4"));
    }
    it();
  }, [dispatch]);

  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ".") + prev;
      });
  }

  const handleDetailApproved = async (id) => {
    const token = await AsyncStorage.getItem("@token_key");
    await dispatch(deApproved(id, token));
    navigation.navigate("DetailApp");
  };

  // console.log(approved.getApproved);
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {approved.getApproved.map((item) => (
          <View
            style={{
              padding: 5,
              borderBottomWidth: 0.5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            key={item._id}>
            <View>
              <Text style={styles.textContent}>Số chứng từ: {item.so_ct}</Text>
              <Text style={styles.textContent}>
                Nhà cung cấp: {item.name_user_created}
              </Text>
              <Text style={styles.textContent}>
                Ngày duyệt: {item.date_updated.slice(0, 10)}
              </Text>

              <Text style={styles.textSum}>
                Tổng tiền: {formatCash(item.t_tien.toString(10))} VND
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
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
                onPress={() => handleDetailApproved(item._id)}>
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
        ))}
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
