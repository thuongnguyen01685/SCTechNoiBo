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
import { useSelector } from "react-redux";

function formatCash(str) {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}
const ProductRoute = () => {
  const { approved } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <ScrollView>
        {approved.deApproved.details.map((item) => (
          <View
            style={{
              flexDirection: "row",
              marginVertical: 5,
              borderBottomWidth: 0.5,
              paddingBottom: 10,
            }}
            key={item._id}>
            <Image
              source={require("../../assets/icon-a.png")}
              style={{
                borderWidth: 1,
                borderColor: "#000000",
                width: 40,
                height: 40,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}>
              <View
                style={{
                  flexDirection: "column",
                  marginHorizontal: 10,
                  justifyContent: "center",
                }}>
                <Text
                  style={{ color: "#000000", fontSize: 12, fontWeight: "600" }}>
                  {item.ten_vt}
                </Text>
                <Text
                  style={{ color: "#000000", fontSize: 10, fontWeight: "400" }}>
                  Số lượng: {item.so_luong}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  right: "100%",
                }}>
                <Text
                  style={{ color: "#000000", fontSize: 12, fontWeight: "600" }}>
                  Giá: {formatCash(item.tt.toString(10))} VND
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
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
  const { approved } = useSelector((state) => state);

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
          <Text style={styles.textContent}>
            Số chứng từ: {approved.deApproved.so_ct}
          </Text>
          <Text style={styles.textContent}>
            Ngày yêu cầu mua hàng:{" "}
            {approved.deApproved.date_created.slice(0, 10)}
          </Text>
          <Text style={styles.textContent}>
            Tiền hàng (chưa thuế):{" "}
            {formatCash(approved.deApproved.t_tien.toString(10))} VND
          </Text>
          <Text style={styles.textContent}>
            Thuế VAT: {approved.deApproved.t_thue}%
          </Text>
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
