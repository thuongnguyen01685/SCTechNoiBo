//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  approveRequest,
  getPurchases,
} from "../../redux/actions/purchasesAction";

const ProductRoute = () => {
  const { purchases } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      {purchases.dePurchases[0].data.details.map((item) => (
        <View
          style={{ flexDirection: "row", marginVertical: 5 }}
          key={item._id}>
          <Image
            source={require("../../assets/logo2.png")}
            style={{
              borderWidth: 1,
              borderColor: "#000000",
              width: 40,
              height: 40,
            }}
          />
          <View
            style={{
              flexDirection: "column",
              marginHorizontal: 10,
              justifyContent: "center",
            }}>
            <Text style={{ color: "#000000", fontSize: 12, fontWeight: "600" }}>
              {item.ten_vt}
            </Text>
            <Text style={{ color: "#000000", fontSize: 10, fontWeight: "400" }}>
              Số lượng: {item.so_luong}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 20,
            }}>
            <Text style={{ color: "#000000", fontSize: 12, fontWeight: "600" }}>
              Giá: {item.tt} VND
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};
const AttachRoute = () => {
  return (
    <View style={styles.container}>
      <Text>Acttach file</Text>
    </View>
  );
};

const renderScene = SceneMap({
  first: ProductRoute,
  second: AttachRoute,
});
// create a component
const DetailPur = () => {
  const { purchases } = useSelector((state) => state);
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Sản phẩm" },
    { key: "second", title: "Đính kèm đã có" },
  ]);
  const handleApprove = async (id, status) => {
    const token = await AsyncStorage.getItem("@token_key");
    dispatch(approveRequest(id, token, status));
    dispatch(getPurchases(token, "3"));
    navigation.navigate("ApprovedScreen");
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
            Chi tiết
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon name="filter" size={15} color="#15294D" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ padding: 5, flexDirection: "row" }}>
        <View>
          <Text style={styles.textContent}>
            Số chứng từ: {purchases.dePurchases[0].data.so_ct}
          </Text>
          <Text style={styles.textContent}>
            Ngày yêu cầu mua hàng:{" "}
            {purchases.dePurchases[0].data.approve_data[0].date_approved.slice(
              0,
              10
            )}
          </Text>
          <Text style={styles.textContent}>
            Tiền hàng (chưa thuế): {purchases.dePurchases[0].data.t_tien} VND
          </Text>
          <Text style={styles.textContent}>Thuế VAT: 0%</Text>
          <Text style={styles.textContent}>
            Phương thức thanh toán: Chuyển khoản
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "10%",
          }}>
          <Text style={{ color: "#E97E00" }}>Yêu cầu duyệt</Text>
        </View>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            renderLabel={({ route, color }) => (
              <Text style={{ color: "#15294D", margin: 8 }}>{route.title}</Text>
            )}
            indicatorStyle={styles.indicatorStyle}
            style={{ backgroundColor: "#f5f5f5" }}
          />
        )}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#15294D",
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 30,
            paddingVertical: 10,
            marginTop: "20%",
            marginHorizontal: 10,
          }}
          onPress={() =>
            handleApprove(
              purchases.dePurchases[0].id_ct,
              purchases.dePurchases[0].update_after_approve.data.trang_thai
            )
          }>
          <Text style={{ fontSize: 10, color: "#ffffff" }}>Duyệt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 30,
            paddingVertical: 10,
            marginTop: "20%",
            marginHorizontal: 10,
            borderColor: "#15294D",
            borderWidth: 1,
          }}
          onPress={() => navigation.navigate("DetailPur")}>
          <Text style={{ fontSize: 10, color: "#15294D" }}>Không duyệt</Text>
        </TouchableOpacity>
      </View>
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
  indicatorStyle: {
    backgroundColor: "#3A4960",
    padding: 1.5,
    marginBottom: -2,
  },
});

//make this component available to the app
export default DetailPur;
