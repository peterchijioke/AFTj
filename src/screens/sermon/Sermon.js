import React, { useState, useCallback, useRef } from "react";
import {
  View,
  Alert,
  Dimensions,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
} from "native-base";
import { AntDesign } from "react-native-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");

export default function Sermon({ navigation }) {
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
    <Container>
      <Header
        androidStatusBarColor={Platform.OS == "android" ? "#000" : "#fff"}
        style={{ backgroundColor: "#fff" }}
      >
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" color="#000" size={20} />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "#000" }}>Sermon</Title>
        </Body>
        <Right>
          <Button transparent></Button>
        </Right>
      </Header>
      <SafeAreaView>
        <View style={styles.UtView}>
          <YoutubePlayer
            height={200}
            width={width - 30}
            play={playing}
            videoId={"qeZ7MJ62vdQ"}
            onChangeState={onStateChange}
          />
        </View>

        <View style={{ marginTop: 10, padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            PRODUCT OF PRAYER
          </Text>
          <Text style={{ fontSize: 14 }}>
            June 21, 2020. Pastor Jide Opaleye
          </Text>
        </View>
        <View style={styles.badg}>
          <Pressable>
            <View
              style={{
                backgroundColor: "#f1f1f1",
                borderRadius: 28,
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="hearto" size={25} />
            </View>
          </Pressable>
          <Pressable style={{ position: "absolute", left: 290 }}>
            <View
              style={{
                backgroundColor: "#f1f1f1",
                borderRadius: 28,
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="sharealt" size={25} />
            </View>
          </Pressable>
        </View>

        <View style={{ flexGrow: 1 }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,

              alignItems: "center",
            }}
          >
            <View
              style={[
                {
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginTop: 10,
                  backgroundColor: "#133",
                  marginBottom: 5,
                  width: width - 20,
                },
              ]}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 18, marginBottom: 20 }}
              >
                Overview
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultricies a nisi quis commodo. Mauris at lobortis orci. Aliquam
                posuere in dolor et accumsan. Mauris erat dui, sollicitudin
                viverra dolor consequat, lobortis finibus ex. Nulla nec
                facilisis augue, at
              </Text>
            </View>
            <View
              style={[
                {
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginTop: 10,
                  backgroundColor: "#133",
                  marginBottom: 5,
                  width: width - 20,
                },
              ]}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 18, marginBottom: 20 }}
              >
                Overview
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultricies a nisi quis commodo. Mauris at lobortis orci. Aliquam
                posuere in dolor et accumsan. Mauris erat dui, sollicitudin
                viverra dolor consequat, lobortis finibus ex. Nulla nec
                facilisis augue, at
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Container>
  );
}

const styles = StyleSheet.create({
  UtView: {
    width: width - 10,
    // justifyContent: "center",
    marginLeft: 5,
    borderRadius: 10,
    paddingTop: 10,
    marginTop: 10,
    backgroundColor: "#FFF",
    alignItems: "center",
    height: 210,
    elevation: 5,
  },
  badg: {
    width,
    // backgroundColor: "#133",
    flexDirection: "row",
    paddingLeft: 30,
    height: 50,
    // justifyContent:'center'a
    alignItems: "center",
  },
});
