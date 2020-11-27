import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Content } from "native-base";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  SimpleLineIcons,
  Octicons,
} from "react-native-vector-icons";
// import AsyncStorage from "@react-native-community/async-storage";
const { width, height } = Dimensions.get("window");

export default class SideLocation extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            width: width / 2 + 40,
            height: height / 3 - 40,
            backgroundColor: "#f1f1f1",
            alignSelf: "center",
            elevation: 5,
            shadowRadius: 5,
            position: "relative",
            top: 75,
            borderRadius: 10,
            padding: 15,
          }}
        >
          <Text style={{ marginBottom: 10, fontSize: 18, marginTop: 5 }}>
            5000 mi
          </Text>
          <Text style={{ marginBottom: 10, fontSize: 18, marginTop: 5 }}>
            3000 Macedonia Road, Power Springs G.A USA.
          </Text>
        </View>

        <View style={[styles.container]}>
          <SimpleLineIcons
            name="arrow-right"
            color="#fff"
            size={20}
            onPress={this.props.close}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 30,
    position: "absolute",
    height: 30,
    bottom: 13,

    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    // marginTop: height / 2 + 115,
  },
});
