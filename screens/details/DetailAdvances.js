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
  const { advances } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 5,
            borderBottomWidth: 0.5,
            paddingBottom: 10,
          }}>
          <View>
            <Text style={styles.textContent}>
              Người tạo: {advances.deAdvances.name_user_created}
            </Text>
            <Text style={styles.textContent}>
              Hình thức thanh toán: Chuyển khoản
            </Text>
            <Text style={styles.textContent}>Bộ phận: kế toán</Text>
            <Text style={styles.textContent}>
              Cửa hàng: {advances.deAdvances.ten_dvcs}
            </Text>
            <Text style={styles.textContent}>Đề nghị trả cho: Xuân Trường</Text>
            <Text style={styles.textContent}>
              Thông tin chuyển khoản:{" "}
              {advances.deAdvances.exfields.so_tk_ngan_hang}
            </Text>
          </View>
        </View>
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
const DetailAdvances = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  //const { payment } = useSelector((state) => state);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Chi tiết" },
    { key: "second", title: "Thông tin khác" },
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
export default DetailAdvances;
