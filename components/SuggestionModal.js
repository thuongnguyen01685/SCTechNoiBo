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

export default function SuggestionModal({ modalVisible, setModalVisible }) {
  const { notify } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        isVisible={modalVisible}
        backdropColor="#FFFFFF"
        backdropOpacity={0.5}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 5,
            padding: 20,
            elevation: 5,
            position: "absolute",
            width: "100%",
            top: "30%",
            height: "auto",
            bottom: "20%",
          }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text
              style={{ fontSize: 14, color: "#15294D", fontWeight: "bold" }}>
              Đề nghị mua hàng
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <MaterialCommunityIcons
                name="close-outline"
                size={24}
                color="#DC143C"
              />
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.table}>
              <Text style={styles.textTable}>Số yêu cầu</Text>
              <Text style={styles.textTable}>Ngày</Text>
              <Text style={styles.textTable}>Sl</Text>
              <Text style={styles.textTable}>Tiền</Text>
              <Text style={styles.textTable}>Tiền thuế NK</Text>
              <Text style={styles.textTable}>Tổng cộng</Text>
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={{ borderBottomWidth: 0.2 }}>
              <View style={styles.rowTable}>
                <Text style={styles.textContent}>39</Text>
                <Text style={styles.textContent}>20/05/2022</Text>
                <Text style={styles.textContent}>1</Text>
                <Text style={styles.textContent}>12.500.000</Text>
                <Text style={styles.textContent}>125.000</Text>
                <Text style={styles.textContent}>137.500.000</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <TouchableOpacity>
                  <Ionicons
                    name="checkmark"
                    size={25}
                    style={{
                      marginHorizontal: 10,
                      marginRight: 10,
                      backgroundColor: "#15294D",
                      borderRadius: 5,
                      textAlign: "center",
                      paddingRight: 10,
                      paddingLeft: 10,
                    }}
                    color="#f5f5f5"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    name="close-outline"
                    size={25}
                    style={{
                      marginHorizontal: 10,
                      borderColor: "#15294D",
                      backgroundColor: "#F5f5f5",
                      borderRadius: 5,
                      paddingRight: 10,
                      paddingLeft: 10,
                    }}
                    color="#15294D"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ borderBottomWidth: 0.2 }}>
              <View style={styles.rowTable}>
                <Text style={styles.textContent}>40</Text>
                <Text style={styles.textContent}>20/05/2022</Text>
                <Text style={styles.textContent}>1</Text>
                <Text style={styles.textContent}>12.500.000</Text>
                <Text style={styles.textContent}>125.000</Text>
                <Text style={styles.textContent}>137.500.000</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <TouchableOpacity>
                  <Ionicons
                    name="checkmark"
                    size={25}
                    style={{
                      marginHorizontal: 10,
                      marginRight: 10,
                      backgroundColor: "#15294D",
                      borderRadius: 5,
                      textAlign: "center",
                      paddingRight: 10,
                      paddingLeft: 10,
                    }}
                    color="#f5f5f5"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    name="close-outline"
                    size={25}
                    style={{
                      marginHorizontal: 10,
                      borderColor: "#15294D",
                      backgroundColor: "#F5f5f5",
                      borderRadius: 5,
                      paddingRight: 10,
                      paddingLeft: 10,
                    }}
                    color="#15294D"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
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
  table: {
    flexDirection: "row",
    marginHorizontal: 10,
    borderBottomWidth: 0.8,
    alignContent: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  textTable: {
    color: "#15294D",
    fontSize: 8,
    fontWeight: "600",
  },
  rowTable: {
    flexDirection: "row",
    marginHorizontal: 10,

    alignContent: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  textContent: {
    color: "#15294D",
    fontSize: 8,
    fontWeight: "500",
  },
});
