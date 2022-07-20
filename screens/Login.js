//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getInfo, login } from "../redux/actions/authAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GLOBALTYPES } from "../redux/actions/globalTypes";
import { getNotify } from "../redux/actions/notifyAction";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Feather";
//alert-triangle

// create a component
const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const navigation = useNavigation();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async () => {
    await dispatch(login(Username.toLowerCase(), Password));

    // setIsShowModal(false);
  };
  useEffect(() => {
    async function it() {
      const token = await AsyncStorage.getItem("@token_key");
      if (token !== null) {
        await dispatch({
          type: GLOBALTYPES.AUTH,
          payload: token,
        });
        await dispatch(getInfo(token));
        await dispatch(getNotify(token));

        navigation.navigate("Draw");
      } else {
        navigation.navigate("Login");
      }
    }
    it();
    if (auth.alert.length > 0) {
      setShowAlert(true);
      setUsername("");
      setPassword("");
    }
    if (auth.alert.length === 0) {
      setShowAlert(false);
    }
    //   dispatch(getNewsData());
  }, [auth.token, dispatch, auth.alert]);
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 10,
          justifyContent: "space-between",
          padding: 20,
          margin: 40,
        }}>
        {/* <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <TouchableOpacity>
            <Ionicons name="close-circle-outline" size={25} color="red" />
          </TouchableOpacity>
        </View> */}
        <Text
          style={{
            color: "#3a4960",
            fontSize: 20,
            textAlign: "center",
          }}>
          Đăng nhập
        </Text>
        <View style={styles.wrap}>
          <Image
            source={require("../assets/icon-a.png")}
            style={styles.image2}
          />
        </View>
        <View style={styles.form}>
          <View style={styles.inputPart}>
            <Ionicons
              name="mail-outline"
              size={20}
              style={{ paddingTop: 10, paddingLeft: 10 }}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={Username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputPart}>
            <Ionicons
              name="eye-outline"
              size={20}
              style={{ paddingTop: 10, paddingLeft: 10 }}></Ionicons>
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              value={Password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.footer}>
            {Username === "" || Password === "" ? (
              <TouchableOpacity disabled={true} onPress={handleSubmit}>
                <LinearGradient
                  start={{ x: 0, y: 0.3 }}
                  end={{ x: 1, y: 1 }}
                  colors={["#f8f8f8", "#888888", "#565656"]}
                  style={{
                    padding: 20,
                    borderRadius: 30,
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#ffffff",
                      fontWeight: "600",
                    }}>
                    Đăng nhập
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleSubmit}>
                <LinearGradient
                  colors={["#508DC7", "#5075C7", "#3F4FAB", "#3A4960"]}
                  start={{ x: 0, y: 0.3 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    padding: 20,
                    borderRadius: 30,
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#ffffff",
                      fontWeight: "600",
                    }}>
                    Đăng nhập
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
          </View>
          {showAlert && (
            <Modal
              animationType="fade"
              transparent={true}
              isVisible={showAlert}
              backdropColor="#C4C4C4"
              backdropOpacity={0.5}
              onBackdropPress={() => setShowAlert(!showAlert)}>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: 10,
                  elevation: 5,
                  width: "100%",
                  height: "auto",
                  bottom: 20,
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: 10,
                  }}>
                  <Icon name="alert-triangle" size={40} color="#5075C7" />
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#5075C7",
                      fontWeight: "700",
                    }}>
                    {auth.alert}
                  </Text>
                </View>

                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: "5%",
                  }}>
                  <TouchableOpacity
                    onPress={() => setShowAlert(false)}
                    style={{ width: "20%" }}>
                    <LinearGradient
                      colors={["#508DC7", "#5075C7", "#3F4FAB", "#3A4960"]}
                      start={[1, 1]}
                      style={{
                        alignItems: "center",
                        padding: 10,
                        borderRadius: 10,
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 15,
                        }}>
                        Ok
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  form: {
    marginVertical: 10,
    marginTop: 25,
    marginRight: 10,
    marginLeft: 10,
  },
  inputPart: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 5,
    borderBottomWidth: 0.8,
    marginTop: 20,
    height: 50,
  },
  input: {
    marginLeft: 20,
    borderLeftWidth: 0.2,
    paddingHorizontal: 25,
    width: "100%",
  },

  body: {
    marginTop: -130,
    alignSelf: "flex-end",
    borderRadius: 30,
  },
  inputParts: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 5,
    marginTop: 20,
  },
  footer: {
    marginVertical: 10,
  },
  wrap: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignSelf: "center",
    top: 25,
  },
  image2: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});

//make this component available to the app
export default Login;
