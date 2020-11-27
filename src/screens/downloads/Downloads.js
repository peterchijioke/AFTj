import React, { Component } from "react";
import { Text, StyleSheet, View, Platform, Dimensions } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Thumbnail,
  List,
  ListItem,
} from "native-base";
import {
  FontAwesome5,
  AntDesign,
  Entypo,
  FontAwesome,
} from "react-native-vector-icons";
const { height, width } = Dimensions.get("window");

export default class Downloads extends Component {
  render() {
    const data = [
      {
        img: require("../../img/img_land.jpg"),
        note: "Do what will keep you happy..",
        title: " Keeping Faith in God",
        id: 1,
      },
      {
        img: require("../../img/img_land.jpg"),
        note: "Do what will keep you happy..",
        title: " Practice of faith (pt. 1)",
        id: 2,
      },
      {
        img: require("../../img/img_land.jpg"),
        note: "Do what will keep you happy..",
        title: " Practice of faith (pt. 2)",
        id: 3,
      },
      {
        img: require("../../img/img_land.jpg"),
        note: "Do what will keep you happy..",
        title: " Understanding Faith",
        id: 4,
      },
    ];
    return (
      <Container>
        <Header
          androidStatusBarColor={Platform.OS == "android" ? "#000" : "#fff"}
          style={{ backgroundColor: "#fff" }}
        >
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <AntDesign name="arrowleft" color="#000" size={20} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#000" }}>Downloads</Title>
          </Body>
          <Right>
            <Button transparent></Button>
          </Right>
        </Header>
        {data.map((item) => {
          return (
            <List key={item.id}>
              <ListItem avatar>
                <Left>
                  <Thumbnail
                    square
                    style={{ width: width / 4, borderRadius: 4 }}
                    // source={{
                    //   uri:
                    //     "https://www.pexels.com/photo/woman-in-red-turtleneck-sweater-5805780/",
                    // }}
                    source={item.img}
                  />
                </Left>
                <Body>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    {item.title}
                  </Text>
                  {/* <Text note>{item.note}</Text> */}
                </Body>
              </ListItem>
            </List>
          );
        })}
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
