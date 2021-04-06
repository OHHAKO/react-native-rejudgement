import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  TouchableHighlight as TouchableOpacity,
} from "react-native";
import { styles, caseStyles } from "./index-styles";

interface Case {
  number: string;
  name: string;
}

export default function Home(): React.ReactElement {
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
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("/");
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.head}>다시 재판</Text>
        </TouchableOpacity>

        <View style={styles.main}>
          <Text style={[styles.description, { color: "white" }]}>
            당신이 판사가 되었습니다. <br />
            다음 중 사건을 골라 판결을 내려주세요.
          </Text>
          <View style={caseStyles.cases}>
            {cases.map((_case, i) => (
              <View style={caseStyles.case}>
                <Image
                  style={caseStyles.caseImage}
                  source={require(`../assets/${_case.number}_0.png`)}
                />
                <Text style={caseStyles.caseName}> ${_case.name} </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </>
  );
}
