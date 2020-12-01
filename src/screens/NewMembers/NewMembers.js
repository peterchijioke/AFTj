import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image,
  Pressable,
  TextInput,
  ToastAndroid,
} from 'react-native';

import {Container, Header, Left, Body, Right, Button, Title} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';

const {width, height} = Dimensions.get('window');
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
import {RadioButton} from 'react-native-paper';
import axios from 'axios';
// --no-jetifier"

export default class NewMembers extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    home: '',
    checked: 'yes',
    hearAboutUs: 'How did you hear about us',
    prayerRequest: '',
  };

  sentDataToDb = async () => {
    if (
      this.state.phone === '' ||
      this.state.email === '' ||
      this.state.name === '' ||
      this.state.home === ''
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
        if (this.state.hearAboutUs === 'How did you hear about us') {
          alert('Please select from the dropdown, how you heard about us..');
        } else {
          try {
            const data = {
              email: this.state.email.trim(),
              name: this.state.name,
              phone: this.state.phone.trim(),
              address: this.state.home,
              church_visit: this.state.checked.trim(),
              hear_about_us: this.state.hearAboutUs,
              prayer_point: this.state.prayerRequest,
            };

            const resp = await axios.post(
              'https://church.aftjdigital.com/api/new-member',
              data,
              {
                cancelToken: source.token,
              },
            );

            // alert(resp.data.message);
            if (resp.data.status === 'success') {
              this.props.navigation.navigate('success');
            }
          } catch (e) {
            console.log(e.response.data);
          }
        }
      }
    }
  };

  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#000" style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
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
          {/* ====================================================================== */}
          <View style={{padding: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Welcome To Jubilee Christian Church Int'l
            </Text>
            <Text>
              We are very delighted that you are here. Our team would love to
              serve you and help you get connected.
            </Text>
          </View>
          <View style={styles.form}>
            <View>
              <Text style={{marginBottom: 12}}>Full Name</Text>
              <TextInput
                keyboardType="default"
                onChangeText={(text) => {
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
            {/* ======================= */}
            <View style={{marginTop: 20}}>
              <Text style={{marginBottom: 12}}>Email Address</Text>
              <TextInput
                keyboardType="email-address"
                multiline
                onChangeText={(text) => {
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
            {/* =================================================================== */}
            <View style={{marginTop: 20}}>
              <Text style={{marginBottom: 12}}>Contact Number</Text>
              <TextInput
                keyboardType="number-pad"
                onChangeText={(text) => {
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
            {/* =========================================================== */}
            <View style={{marginTop: 20}}>
              <Text style={{marginBottom: 12}}>Home Address</Text>
              <TextInput
                keyboardType="default"
                onChangeText={(text) => {
                  this.setState({home: text});
                }}
                value={this.state.home}
                style={{
                  borderBottomColor: '#000',
                  padding: 2,
                  borderBottomWidth: 1,
                }}
                multiline
                placeholder="Enter Home Address"
              />
            </View>
            <View style={{marginTop: 20}}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', marginBottom: 20}}>
                Have you visited our church before?
              </Text>
            </View>
            <View style={{width: width / 9}}>
              <RadioButton
                color="#000"
                value="first"
                status={this.state.checked === 'yes' ? 'checked' : 'unchecked'}
                onPress={() => this.setState({checked: 'yes'})}
              />
              <RadioButton
                color="#000"
                value="first"
                status={this.state.checked === 'no' ? 'checked' : 'unchecked'}
                onPress={() => this.setState({checked: 'no'})}
              />
            </View>

            <Picker
              selectedValue={this.state.hearAboutUs}
              style={{height: 50, width: 300}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({hearAboutUs: itemValue})
              }>
              <Picker.Item
                label="How did you hear about us?"
                value="How did you hear about us?"
              />
              <Picker.Item label="Search Engine" value="Search Engine" />
              <Picker.Item label="Google Ads" value="Google Ads" />
              <Picker.Item label="YouTube Ads" value="YouTube Ads" />
              <Picker.Item
                label="Facebook Post/Group"
                value="Facebook Post/Group"
              />
              <Picker.Item label="Twitter Post" value="Twitter Post" />
              <Picker.Item
                label="Instagram Post/Story"
                value="Instagram Post/Story"
              />
              <Picker.Item
                label="Other Social Media"
                value="Other Social Media"
              />
              <Picker.Item label="Email" value="Email" />
              <Picker.Item label="TV" value="TV" />
              <Picker.Item label="Newspaper" value="Newspaper" />
              <Picker.Item label="Word of mouth" value="Word of mouth" />
            </Picker>
            {/* =============================================================================== */}
            <View style={{marginTop: 20}}>
              <Text style={{marginBottom: 14, fontWeight: 'bold'}}>
                Anything you would like us to pray with you about?
              </Text>
              <TextInput
                keyboardType="default"
                onChangeText={(text) => {
                  this.setState({prayerRequest: text});
                }}
                value={this.state.prayerRequest}
                style={{
                  borderBottomColor: '#000',
                  padding: 2,
                  borderBottomWidth: 1,
                }}
                multiline
                placeholder="Enter Prayer request."
              />
            </View>
          </View>
          <Pressable onPress={this.sentDataToDb} style={styles.Pressable}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Submit
            </Text>
          </Pressable>
        </ScrollView>

        {/* </KeyboardAvoidingView> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {backgroundColor: '#fff'},
  form: {
    // backgroundColor: "#133",

    width: width - 20,
    height: height - 40,
    marginBottom: 10,
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
    alignSelf: 'flex-end',
    backgroundColor: 'gray',
    width: width / 2,
    height: 50,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
