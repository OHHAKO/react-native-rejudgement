import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Home(): React.ReactElement {
  const styles = StyleSheet.create({
    root: {
      width: "100%",
      height: "100%",
      zIndex: 50,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "black",
    },

    head: {
      fontSize: 50,
      fontWeight: "bold",
      color: "white",
      borderTopColor: "white",
      borderBottomColor: "white",
      borderWidth: 1,
      paddingHorizontal: 25,
      paddingVertical: 8,
    },

    main: {
      width: "100%",
      maxWidth: "800px",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "blue",
      borderColor: "white",
      borderWidth: 0.8,
      marginTop: 30,
      textAlign: "center",
    },

    description: {
      color: "white",
      borderStyle: "solid",
      borderBottomColor: "white",
      fontSize: 15,
      fontWeight: "bold",
      paddingTop: 30,
      paddingBottom: 30,
    },

    caseCell: {
      width: "100%",
      backgroundColor: "red",
      flexDirection: "row",
      flexWrap: "wrap",
    },

    case: {
      width: "50%",
      flexGrow: 1,
      backgroundColor: "green",
      flexDirection: "column",
      alignItems: "center",
      padding: 20,
    },
    caseImage: {
      width: 130,
      height: 130,
    },

    caseName: {
      backgroundColor: "white",
      color: "black",
      padding: 10,
      borderWidth: 3,
      borderColor: "black",
      borderRadius: 12,
      fontWeight: "bold",
      fontSize: 17,
      marginTop: 10,
    },
  });

  return (
    <>
      <View style={styles.root}>
        <Text style={styles.head}>다시 재판</Text>

        <View style={styles.main}>
          <Text style={styles.description}>
            당신이 판사가 되었습니다. <br />
            다음 중 사건을 골라 판결을 내려주세요.
          </Text>
          <View style={styles.caseCell}>
            <View style={styles.case}>
              <Image
                style={styles.caseImage}
                source={require("../assets/2018고단4404_0.png")}
              />
              <Text style={styles.caseName}> '여자=음란물'인 사이트 </Text>
            </View>
            <View style={styles.case}>
              <Image
                style={styles.caseImage}
                source={require("../assets/2018고단4404_0.png")}
              />
              <Text style={styles.caseName}> 지사님은 성범죄자 </Text>
            </View>
            <View style={styles.case}>
              <Image
                style={styles.caseImage}
                source={require("../assets/2018고단4404_0.png")}
              />
              <Text style={styles.caseName}> 가해자(56, 남)-피해자(8,여) </Text>
            </View>
            <View style={styles.case}>
              <Image
                style={styles.caseImage}
                source={require("../assets/2018고단4404_0.png")}
              />
              <Text style={styles.caseName}>
                {" "}
                초국가적 성범죄자, 그는 한(국)남(자){" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
