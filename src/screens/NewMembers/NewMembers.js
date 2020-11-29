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
  ToastAndroid,
} from 'react-native';

import {Container, Header, Left, Body, Right, Button, Title} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
import axios from 'axios';

export default class NewMembers extends Component {
  state = {name: '', email: '', phone: ''};

  sentDataToDb = async () => {
    if (
      this.state.phone === '' ||
      this.state.email === '' ||
      this.state.name === ''
    ) {
      ToastAndroid.showWithGravityAndOffset(
        'Please do not leave any input field empty',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else {
      let testName = new RegExp(/^[0-9a-zA-Z]+$/);
      let testMail = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      );

      // if (!testName.test(this.state.name.trim())) {
      //   ToastAndroid.showWithGravityAndOffset(
      //     'Name must be letters only',
      //     ToastAndroid.LONG,
      //     ToastAndroid.BOTTOM,
      //     25,
      //     50,
      //   );
      // } else
      if (!testMail.test(this.state.email.trim())) {
        ToastAndroid.showWithGravityAndOffset(
          'Invalid email, try again',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      } else {
        try {
          const data = {
            email: this.state.email.trim(),
            name: this.state.name.trim(),
            phone: this.state.phone.trim(),
          };
          // const DD = JSON.stringify(data);
          // console.log(DD);
          const resp = await axios.post(
            'https://church.aftjdigital.com/api/new-member',
            data,
            {
              cancelToken: source.token,
            },
          );

          console.log(resp.data.message);
          alert(resp.data.message);
        } catch (error) {
          console.log(e.response.data);
        }
      }
    }
  };

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
                  keyboardType="default"
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
                  keyboardType="email-address"
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
                  keyboardType="number-pad"
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
              <Pressable onPress={this.sentDataToDb} style={styles.Pressable}>
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
