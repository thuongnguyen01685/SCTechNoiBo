import React from "react";
import { useState, useEffect } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import moment from "moment";
import { useDispatch } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getNotify } from "../redux/actions/notifyAction";

export default function TouchNotify() {
  const [detailUser, setDetailUser] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { notify } = useSelector((state) => state);
  const [isRead, setIsRead] = useState(true);

  const sumNotifyNotRead = notify.getNotify
    ? notify.getNotify.length > 0
      ? notify.getNotify
          .filter((items) => items.read === false)
          .map((item) => item)
      : 0
    : 0;

  const dispatch = useDispatch();
  const [token, setToken] = useState("check");
  //   const [check, setcheck] = useState("check");

  useEffect(() => {
    async function it() {
      //console.log("totify",notify)
      const token = await AsyncStorage.getItem("@token_key");
      if (token != null) {
        await dispatch(getNotify(token));
      }
    }
    it();
  }, [dispatch]);

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        isVisible={modalVisible}
        backdropColor="#C4C4C4"
        backdropOpacity={0.5}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: 20,
            elevation: 5,
            position: "absolute",
            width: "100%",
            top: 14,
            height: "auto",
            bottom: 20,
          }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text
              style={{ fontSize: 25, color: "#000000", fontWeight: "bold" }}>
              Thông báo
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <MaterialCommunityIcons
                name="close-outline"
                size={24}
                color="#000000"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <TouchableOpacity onPress={() => setIsRead(true)}>
              <View style={{ borderRadius: 50, overflow: "hidden" }}>
                {isRead ? (
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#15294D",
                      backgroundColor: "#B2CBF9",
                      borderRadius: 20,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                    }}>
                    Tất cả
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#5F5F5F",
                      backgroundColor: "#ECECEC",
                      borderRadius: 20,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                    }}>
                    Tất cả
                  </Text>
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsRead(false)}>
              <View style={{ borderRadius: 50, overflow: "hidden" }}>
                {isRead ? (
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#5F5F5F",
                      backgroundColor: "#ECECEC",
                      borderRadius: 20,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                    }}>
                    Chưa đọc
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#15294D",
                      backgroundColor: "#B2CBF9",
                      borderRadius: 20,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                    }}>
                    Chưa đọc
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            {isRead
              ? notify.getNotify
                ? notify.getNotify.map((item) => (
                    <View key={item._id} style={styles.notifyContainer}>
                      <View style={styles.itemNew}>
                        <View
                          style={{
                            justifyContent: "flex-start",
                            marginTop: 5,
                          }}>
                          <Ionicons
                            name="md-notifications"
                            size={30}
                            color="#F2933E"
                            style={{ marginRight: 10 }}
                          />
                        </View>
                        <View style={styles.detailNews}>
                          <View>
                            <Text
                              style={{
                                fontSize: 17,
                                color: "#000000",
                                fontWeight: "bold",
                                opacity: 0.8,
                                marginBottom: 3,
                              }}>
                              {item.title}
                            </Text>
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}>
                              <Text
                                style={{
                                  fontSize: 13,
                                  color: "#C1C1C1",
                                  opacity: 0.9,
                                }}>
                                {moment(item.date_created).fromNow()}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={{
                            justifyContent: "flex-start",
                            marginTop: 5,
                          }}>
                          <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            size={18}
                            color="#15294D"
                          />
                        </View>
                      </View>
                    </View>
                  ))
                : []
              : notify.getNotify
              ? notify.getNotify
                  .filter((items) => items.read === false)
                  .map((item) => (
                    <View key={item._id} style={styles.notifyContainer}>
                      <View style={styles.itemNew}>
                        <View
                          style={{
                            justifyContent: "flex-start",
                            marginTop: 5,
                          }}>
                          <Ionicons
                            name="md-notifications"
                            size={30}
                            color="#F2933E"
                            style={{ marginRight: 10 }}
                          />
                        </View>
                        <View style={styles.detailNews}>
                          <View>
                            <Text
                              style={{
                                fontSize: 17,
                                color: "#000000",
                                fontWeight: "bold",
                                opacity: 0.8,
                                marginBottom: 3,
                              }}>
                              {item.title}
                            </Text>
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}>
                              <Text
                                style={{
                                  fontSize: 13,
                                  color: "#C1C1C1",
                                  opacity: 0.9,
                                }}>
                                {moment(item.date_created).fromNow()}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={{
                            justifyContent: "flex-start",
                            marginTop: 5,
                          }}>
                          <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            size={18}
                            color="#15294D"
                          />
                        </View>
                      </View>
                    </View>
                  ))
              : []}
          </ScrollView>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View>
          <View
            style={{
              height: 2,
              width: 2,
              backgroundColor: "#FF0000",
              borderRadius: 50,
              borderColor: "#fff",
              borderWidth: 2,
              padding: 4,
              position: "absolute",
              margin: 10,
              left: 14,
              top: -8,
              zIndex: 1,
              padding: 6,
            }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 8,
                zIndex: 3,
                position: "absolute",
                left: 1,
                textAlign: "center",
                fontWeight: "800",
              }}>
              {sumNotifyNotRead.length}
            </Text>
          </View>

          <Ionicons
            name="md-notifications"
            size={28}
            color="#F2933E"
            style={{ paddingLeft: 10 }}
          />
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  notifyContainer: {
    borderBottomWidth: 0.7,
    borderBottomColor: "#f1f1f1",
  },
  itemNew: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 15,
    borderRadius: 0,
    backgroundColor: "#fff",
    marginBottom: 5,
  },
  detailNews: {
    flex: 1,
  },
  img: {
    marginRight: 15,
    resizeMode: "contain",
    width: 130,
    height: 70,
  },
});
