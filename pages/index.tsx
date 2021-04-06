import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

interface Case {
  number: string;
  name: string;
}

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
      backgroundColor: "black",
      flexDirection: "row",
      flexWrap: "wrap",
    },

    case: {
      width: "50%",
      flexGrow: 1,
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

  const cases: Case[] = [
    {
      number: "2018고단4404",
      name: "'여자=음란물'인 사이트",
    },
    {
      number: "2019도2562",
      name: "지사님은 성범죄자",
    },
    {
      number: "2009도7948",
      name: "가해자(56, 남)-피해자(8,여) ",
    },
    {
      number: "2018노2855",
      name: "초국가적 성범죄자, 그는 한(국)남(자)",
    },
  ];

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
            {cases.map((_case, i) => (
              <View style={styles.case}>
                <Image
                  style={styles.caseImage}
                  source={require(`../assets/${_case.number}_0.png`)}
                />
                <Text style={styles.caseName}> ${_case.name} </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </>
  );
}
