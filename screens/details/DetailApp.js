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

const ProductRoute = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginVertical: 5 }}>
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
            Rửa thân vỏ (SP00000627)
          </Text>
          <Text style={{ color: "#000000", fontSize: 10, fontWeight: "400" }}>
            Số lượng: 1
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
            Giá: 65.000 VND
          </Text>
        </View>
      </View>
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
const DetailApp = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Sản phẩm" },
    { key: "second", title: "Đính kèm đã có" },
  ]);
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
          <Text style={styles.textContent}>Đơn hàng: 3642</Text>
          <Text style={styles.textContent}>
            Ngày yêu cầu mua hàng: 5/7/2022
          </Text>
          <Text style={styles.textContent}>
            Tiền hàng (chưa thuế): 65.000 VND
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
          <Text style={{ color: "#1B9927" }}>Đã duyệt</Text>
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
export default DetailApp;
