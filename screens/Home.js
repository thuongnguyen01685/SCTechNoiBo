//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component, useEffect, useState } from "react";
// import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getInfo } from "../redux/actions/authAction";

import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  DeviceEventEmitter,
  Platform,
  Image,
  ScrollView,
  // ImageBackground,
  // StatusBar,
  TouchableOpacity,
} from "react-native";

import * as Notifications from "expo-notifications";
import io from "socket.io-client";
import { GLOBALTYPES } from "../redux/actions/globalTypes";
import { getNotify } from "../redux/actions/notifyAction";
import CardProduct from "../components/CardProduct";
import SuggestionModal from "../components/SuggestionModal";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const server_url = "https://api.fostech.vn";
//socket notify

//dispatch(checkLoginSession(1));

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);

  useEffect(() => {
    async function it() {
      const token = await AsyncStorage.getItem("@token_key");

      //console.log(auth.token);

      dispatch(getNotify(token));
      const initSocket = async () => {
        //get func

        let lang,
          cachedData = {};
        function get(url, headers, callback, options = { cache: false }) {
          if (cachedData[url] && options.cache) {
            //console.log("get from cached",url);
            return callback(null, cachedData[url]);
          }
          var request = new XMLHttpRequest();
          request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
              return;
            }
            if (request.status === 200) {
              let data = request.responseText;
              if (options.onProccess) {
                data = options.onProccess(data);
              }
              if (options.cache) cachedData[url] = data;
              callback(null, request.responseText);
            } else {
              let error = request.responseText || "";
              if (!error || error.indexOf("flexbiz") >= 0)
                error = "Can't connect to server";
              callback(error);
            }
          };
          request.open("GET", url);
          request.setRequestHeader("Accept-Encoding", "gzip");
          if (headers) {
            headers.forEach((header) => {
              request.setRequestHeader(header.name, header.value);
            });
          }
          request.send();
        }

        //asyncGet func
        async function asyncGet(url, headers, options = {}) {
          let p = new Promise((resovle, reject) => {
            get(
              url,
              headers,
              (e, rs) => {
                if (e) return reject(new Error(e));
                resovle(rs);
              },
              options
            );
          });
          return p;
        }

        // registerForPushNotificationsAsync func

        async function registerForPushNotificationsAsync(access_token) {
          const { status: existingStatus } =
            await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== "granted") {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }

          if (finalStatus !== "granted") {
            //Alert.alert(getLabel("Chương trình này cần được cấp quyền hiển thị thông báo"))
            return false;
          }
          // Get the token that uniquely identifies this device
          let token = (await Notifications.getExpoPushTokenAsync()).data;
          // POST the token to your backend server from where you can retrieve it to send push notifications.
          if (Platform.OS === "android") {
            Notifications.setNotificationChannelAsync("chat-messages", {
              name: "chat-messages",
              importance: Notifications.AndroidImportance.MAX,
              vibrationPattern: [0, 250, 250, 250],
              lightColor: "#FF231F7C",
            });

            Notifications.setNotificationChannelAsync("default", {
              name: "default",
              importance: Notifications.AndroidImportance.MAX,
              vibrationPattern: [0, 250, 250, 250],
              lightColor: "#FF231F7C",
            });
          }
          try {
            let rs = await asyncGet(
              `${server_url}/api/register-endpoint?access_token=${access_token}&ep=${token}`
            );
            await AsyncStorage.setItem("endpoint", token);
          } catch (e) {
            return false;
          }
          return true;
        }

        let notificationPermission;
        try {
          notificationPermission = await registerForPushNotificationsAsync(
            // JSON.parse(value).token,
            auth.token
          );

          //receiver notification
          if (notificationPermission == false) {
            Notifications.addNotificationReceivedListener((res) =>
              _handleNotification(res)
            );

            Notifications.addNotificationResponseReceivedListener((res) =>
              _handleNotificationResponse(res)
            );
          }
        } catch (e) {
          Alert.alert(e.message);
        }

        //connect socket

        const socket = io(server_url);
        socket.on("connect", () => {
          socket.emit("login", {
            // token: "2b0350de2b7100a6562ecb87b40ae520",
            // email: "thuong.nguyen@fostech.vn",
            token: auth.token,
            email: auth.profile.email,
          });
        });

        socket.on("disconnect", function () {
          // console.error("socket disconnectedf");
        });

        socket.on("reconnect_error", function () {
          console.error("socket reconnect error");
        });
        socket.on("connect_error", function () {
          console.error("socket connect error");
        });
        socket.on("connect_timeout", (timeout) => {
          console.error("socket connect timeout", timeout);
        });

        socket.emit("login", {
          token: auth.token,
          email: auth.profile.email,
          // token: "2b0350de2b7100a6562ecb87b40ae520",
          // email: "thuong.nguyen@fostech.vn",
        });

        socket.on("notify:update", function (data) {
          DeviceEventEmitter.emit("notificationUpdated", data);
        });

        function _handleNotification(notification) {
          //console.log("data", notification);
          let data = notification.request.content.data;
          //console.log("received notificaiton",data);
          DeviceEventEmitter.emit(data.__event, data);
        }
        async function _handleNotificationResponse(response) {
          //console.log("repon", response);
          let data = response.notification.request.content.data;
          //console.log(true);
          //news
          if (data.__event && data.__event.indexOf("news:") >= 0) {
            if (data._id) {
              try {
                let news = await asyncGetOrderDetail(
                  this.state.userInfo.token,
                  data._id,
                  "news",
                  data.id_app
                );
                this.navigate("NewsDetail", { news: news });
              } catch (e) {
                console.error(e.message);
              }
            }
            return;
          }

          // if (data.__event && data.__event.indexOf("message2:") >= 0) {
          //   if (data.id_link) {
          //     try {
          //       let group = await asyncGetData(
          //         this.state.userInfo.token,
          //         "message2",
          //         { id_link: data.id_link }
          //       );
          //       this.navigate("ChatRoom", { group: group });
          //     } catch (e) {
          //       console.error(e.message);
          //     }
          //     return;
          //   }
          // }

          if (
            data.__event &&
            data.__event.indexOf("notify:new") >= 0 &&
            data._id
          ) {
            DeviceEventEmitter.emit("notificationAdded", { _id: data._id });
            try {
              let url = `${server_url}/api/notification/${data._id}?access_token=${this.state.userInfo.token}`;
              let n = await asyncGet(url, null);
              this.navigate("NotificationDetail", {
                userInfo: this.state.userInfo,
                notification: n,
              });
            } catch (e) {
              console.error(e.message);
            }
            return;
          }
          Toast.show({
            text: data.title || getLabel("Bạn có thông báo mới"),
            buttonText: "Okay",
            duration: 3000,
            type: "danger",
            position: "top",
          });
        }
      };
      initSocket();
    }
    it();
  }, [dispatch]);

  //login check
  // useEffect(async () => {
  //   const token = await AsyncStorage.getItem("@token_key");

  //   if (token !== null) {
  //     dispatch({
  //       type: GLOBALTYPES.AUTH,
  //       payload: token,
  //     });
  //     dispatch(getInfo(token));

  //     navigation.navigate("TabBar");
  //   } else {
  //     navigation.navigate("Login");
  //   }
  // }, [dispatch]);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={{ paddingLeft: 30, paddingTop: 10 }}>
          <Image
            source={require("../assets/banner.png")}
            style={{ borderRadius: 5 }}
          />
          {/* <TouchableOpacity
            style={{
              backgroundColor: "#15294D",
              marginVertical: 10,
              padding: 2,
              width: "30%",
              borderRadius: 5,
            }}
            onPress={() => setModalVisible(true)}>
            <Text
              style={{
                color: "#f1f1f1",
                margin: 2,
                fontSize: 10,
                textAlign: "center",
              }}>
              Xem đề nghị
            </Text>
          </TouchableOpacity>
          {modalVisible && (
            <SuggestionModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          )} */}
        </View>
        <View>
          <View style={{ marginTop: 10, marginLeft: 15 }}>
            <Text
              style={{
                color: "#15294D",
                fontSize: 17,
                fontWeight: "700",
                borderBottomWidth: 4,
                width: "20%",
                fontWeight: "bold",
                borderEndColor: "#15294D",
              }}>
              Sc Tech
            </Text>
          </View>
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                top: 10,
                marginBottom: 10,
              }}>
              {/* {products.product.map((item) => (
              <CardCategory key={item._id} item={item} />
            ))} */}
              <CardProduct
                img={require("../assets/shopping.png")}
                nameCard="Yêu cầu mua hàng"
                link="Purchases"
              />
              <CardProduct
                img={require("../assets/bag.png")}
                nameCard="Yêu cầu đã duyệt"
                link="Approved"
              />
              <CardProduct
                img={require("../assets/bagCancel.png")}
                nameCard="Yêu cầu bị từ chối"
                link="Denied"
              />
              <CardProduct
                img={require("../assets/money.png")}
                nameCard="Đề nghị thanh toán"
                link="PaymentOrder"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5f5f5",
    paddingTop: 10,
  },
  body: {},
});

//make this component available to the app
export default Home;
