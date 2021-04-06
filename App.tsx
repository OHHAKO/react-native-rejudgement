import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Helmet } from "react-helmet";
import Home from "./pages/index";

export default function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Judgement Simulator</title>
        {/* <link rel="icon" href="/favicon.svg" /> */}
      </Helmet>
      <View style={styles.container}>
        {/* <Text>Open up App.tsx to start working on your app!</Text> */}
        {/* <StatusBar style="auto" />*/}
        <Home />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
