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
import { useSelector, useDispatch } from "react-redux";
import {
  dePurchases,
  getPurchases,
  PURCHASES,
} from "../../redux/actions/purchasesAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
// create a component
const Purchases = () => {
  const navigation = useNavigation();
  const { purchases } = useSelector((state) => state);
  const dispatch = useDispatch();

  let a = [];
  purchases.getPurchases.map((item) => {
    let array = item.data.approve_data.sort(
      (a, b) => a.date_approved.slice(0, 10) - b.date_approved.slice(0, 10)
    );
    a.push(array[0]);
  });

  useEffect(() => {
    async function it() {
      const token = await AsyncStorage.getItem("@token_key");
      await dispatch(getPurchases(token, "3"));
    }
    it();
  }, [dispatch]);

  const handleDetail = (id) => {
    dispatch(dePurchases(id, purchases));
    navigation.navigate("DetailPur");
  };

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
            Yêu cầu mua hàng
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon name="filter" size={15} color="#15294D" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {purchases.getPurchases.length === 0 ? (
          <View>
            <Text
              style={{
                fontSize: 12,
                color: "#15294D",
                textAlign: "center",
                marginTop: 10,
                fontWeight: "500",
              }}>
              Không có yêu cầu mua hàng.
            </Text>
          </View>
        ) : (
          purchases.getPurchases.map((item) => (
            <View
              style={{
                padding: 5,
                borderBottomWidth: 0.5,
                flexDirection: "row",
              }}
              key={item._id}>
              <View>
                <Text style={styles.textContent}>
                  Số chứng từ: {item.data.so_ct}
                </Text>
                <Text style={styles.textContent}>
                  Nhà cung cấp: Xuân Trường
                </Text>
                <Text style={styles.textContent}>
                  Người yêu cầu: {item.user_request_name}
                </Text>
                <Text style={styles.textContent}>
                  Người duyệt trước:{" "}
                  {item.data.approve_data[0].user_approved_name}
                </Text>
                <Text style={styles.textSum}>
                  Tổng tiền: {item.data.t_tien} VND
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: "10%",
                }}>
                <Text style={{ color: "#E97E00" }}>Yêu cầu duyệt</Text>
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
                  onPress={() => handleDetail(item._id)}>
                  <Text style={{ fontSize: 10, color: "#ffffff" }}>
                    Xem chi tiết
                  </Text>
                  <Ionicons
                    name="arrow-forward-outline"
                    size={10}
                    color="#ffffff"
                    style={{ left: 10 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
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
export default Purchases;
