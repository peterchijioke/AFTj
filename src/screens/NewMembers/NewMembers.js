import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Content,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { TextInput } from "react-native-gesture-handler";
// import { SafeAreaView } from "react-native-safe-area-context";

const {width, height} = Dimensions.get('window');

export default class NewMembers extends Component {
  state = {name: '', email: '', phone: ''};
  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#000" style={styles.header}>
          <Left>
            <Button transparent onPress={() => console.log('peter')}>
              <AntDesign name="arrowleft" color="#000" size={20} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: '#000'}}>New Members</Title>
          </Body>
          <Right>
            <Button transparent></Button>
          </Right>
        </Header>
        <ScrollView>
          <View style={styles.imgView}>
            <Image
              source={require('../../img/welcome.jpeg')}
              style={styles.img}
            />
          </View>

          {/* ================================================= */}

          <View style={{padding: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Welcome To Jubilee Christian Church Int'l
            </Text>
            <Text>
              We are very delighted that you are here. Our team would love to
              serve you and help you get connected.
            </Text>
          </View>
          {/* ==================================================== */}

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <View style={styles.form}>
              <View>
                <Text style={{marginBottom: 12}}>Full Name</Text>
                <TextInput
                  onChangeText={(text) => {
                    console.log(text);
                    this.setState({name: text});
                  }}
                  value={this.state.name}
                  style={{
                    borderBottomColor: '#000',
                    padding: 2,
                    borderBottomWidth: 1,
                  }}
                  placeholder="Enter Your Full Name"
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{marginBottom: 12}}>Email Address</Text>
                <TextInput
                  onChangeText={(text) => {
                    console.log(text);
                    this.setState({email: text});
                  }}
                  value={this.state.email}
                  style={{
                    borderBottomColor: '#000',
                    padding: 2,
                    borderBottomWidth: 1,
                  }}
                  placeholder="Enter Your Email Address"
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{marginBottom: 12}}>Contact Number</Text>
                <TextInput
                  onChangeText={(text) => {
                    console.log(text);
                    this.setState({phone: text});
                  }}
                  value={this.state.phone}
                  style={{
                    borderBottomColor: '#000',
                    padding: 2,
                    borderBottomWidth: 1,
                  }}
                  placeholder="Enter Your Phone Number"
                />
              </View>
              <Pressable
                onPress={() => {
                  console.log('pressed done');
                }}
                style={styles.Pressable}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                  Done
                </Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {backgroundColor: '#fff'},
  form: {
    // backgroundColor: "#133",

    width: width - 20,
    height: height / 2 - 5,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 20,
  },
  img: {
    width: width - 20,
    height: height / 5,
    borderRadius: 20,
  },
  imgView: {alignItems: 'center', marginTop: 10},
  Pressable: {
    alignSelf: 'center',
    backgroundColor: 'green',
    width: width / 2,
    height: 45,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
