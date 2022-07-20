//import liraries
import React, { Component } from "react";
import { useCallback, useRef } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Alert, Button } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

// create a component
const Denied = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        play={true}
        videoId={"KrI9alC6mhY"}
        onChangeState={onStateChange}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

//make this component available to the app
export default Denied;
