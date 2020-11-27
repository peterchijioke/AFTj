import React, { Component, PureComponent } from "react";

import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  StatusBar,
  Text,
  Platform,
} from "react-native";
import { Button, Drawer } from "native-base";
import SwiperFlatList from "react-native-swiper-flatlist";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

import Foooter from "./Foooter";
const { width, height } = Dimensions.get("window");
import Side from "./Side";
import FooterN from "./FooterN";

export default class Main extends PureComponent {
  state = { btnTopRight: false, bgActive: "", iconActive: "" };

  goToNotificationpage = () => {
    this.setState({ bgActive: "#09822E", iconActive: "#fff" }, () => {
      // do something here
    });
  };

  closeDrawer = () => {
    this.drawer._root.close();
    this.setState({ btnTopRight: false });
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  onOpenD = () => {
    this.setState({ btnTopRight: true });
    this.openDrawer();
  };
  onClose = () => {
    this.setState({ btnTopRight: false });
    this.closeDrawer();
  };
  render() {
    if (Platform.OS == "ios") {
    }
    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={<Side navigation={this.props.navigation} />}
        onClose={() => this.closeDrawer()}
      >
        <StatusBar
          barStyle={Platform.OS == "android" ? "light-content" : "dark-content"}
        />
        {/* <StatusBar barStyle="light-content" /> */}
        <SafeAreaView style={styles.container}>
          {/* {this.state.btnTopRight === false ? ( */}
          <Button onPress={this.onOpenD} transparent style={styles.icon}>
            <MaterialIcons name="menu" color="#ccc" size={30} />
          </Button>
          <Button transparent style={[styles.icon, { left: 310 }]}>
            <MaterialIcons name="search" color="#ccc" size={30} />
          </Button>
          {/* ) : ( */}
          {/* <Button onPress={this.onClose} transparent style={styles.icon}>
              <MaterialCommunityIcons name="menu-open" color="#ccc" size={30} />
            </Button> */}
          {/* )} */}

          <SwiperFlatList
            // autoplay
            autoplayDelay={6}
            autoplayLoop
            index={2}
            showPagination
            // pa
            paginationStyle={{ marginBottom: 160 }}
          >
            <View>
              <Image
                source={require("../../img/jv.jpg")}
                style={[styles.child]}
              />
              <Text
                style={{
                  color: "#fff",
                  position: "absolute",
                  top: 260,
                  textAlign: "center",
                  left: 78,
                  zIndex: 2,
                }}
              >
                petejhhhrfvejhgvrjhgejhgr
              </Text>
            </View>
            <Image
              source={require("../../img/img3.jpg")}
              style={[styles.child]}
            />
            <Image
              source={require("../../img/img.jpg")}
              style={[styles.child]}
            />
            <Image
              source={require("../../img/img1.jpg")}
              style={[styles.child]}
            />
            <Image
              source={require("../../img/img4.jpg")}
              style={[styles.child]}
            />
          </SwiperFlatList>

          <FooterN />

          <Foooter navigation={this.props.navigation} />
        </SafeAreaView>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  child: {
    height: height - 110,
    width,
    justifyContent: "center",
  },
  text: {
    fontSize: width * 0.5,
    textAlign: "center",
  },
  icon: {
    marginLeft: 10,
    position: "absolute",
    zIndex: 1,
    // top:
  },
  inText: { textAlign: "center", color: "#fff", fontSize: 12 },
  viewTT: { justifyContent: "center", alignItems: "center" },
});
