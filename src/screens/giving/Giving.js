import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Body,
  Title,
  Right,
  Icon,
  Left,
  Button,
  Drawer,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foooter from '../Home/Foooter';
import {Picker} from '@react-native-picker/picker';
import Side from '../Home/Side';

export default class Giving extends Component {
  state = {checked: 'Select category', oneOff: 'One-Off'};
  closeDrawer = () => {
    this.drawer._root.close();
    this.setState({btnTopRight: false});
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    const {navigation} = this.props;
    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={<Side navigation={this.props.navigation} />}
        onClose={() => this.closeDrawer()}>
        <Container>
          <Content>
            <Header
              androidStatusBarColor="#000"
              style={{backgroundColor: '#fff'}}>
              <Left>
                <Button onPress={this.openDrawer} transparent>
                  <MaterialIcons name="menu" color="#000" size={30} />
                </Button>
              </Left>
              <Body>
                <Title style={{color: '#000'}}>Giving</Title>
              </Body>
              <Right>
                <Button transparent></Button>
              </Right>
            </Header>
            <View style={{height}}>
              <View style={{margin: 18}}>
                <Text style={{fontSize: 16, marginTop: 10}}>
                  For your convenience, donate to AFTj Church via the below link
                  to our secure donation site. God bless you as you do so.
                </Text>
              </View>
              <View style={styles.secPicker}>
                <Picker
                  selectedValue={this.state.checked}
                  style={{height: 50, width: 280}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({checked: itemValue})
                  }>
                  <Picker.Item
                    label="Select Category"
                    value="Select Category"
                  />
                  <Picker.Item label="Offering" value="Offering" />
                  <Picker.Item label="Tithe" value="Tithe" />
                  <Picker.Item
                    label="Mission Support"
                    value="Mission Support"
                  />
                  <Picker.Item label="Church Project" value="Church Project" />
                  <Picker.Item label="Others" value="Others" />
                </Picker>
              </View>
              {/* ============================================================ */}

              <View style={[styles.secPicker, {marginTop: 35}]}>
                <Picker
                  selectedValue={this.state.oneOff}
                  style={{height: 50, width: 280}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({oneOff: itemValue})
                  }>
                  <Picker.Item label="One-Off" value="0ne-Off" />
                  <Picker.Item label="Monthly" value="Monthly" />
                </Picker>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 95,
                }}>
                <Pressable
                  style={styles.pay}
                  onPress={() => navigation.navigate('amount')}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>Pay</Text>
                </Pressable>
                <Text style={{fontSize: 23, marginTop: 40, marginBottom: 40}}>
                  OR
                </Text>
                <Pressable
                  onPress={() => console.log('pay with cash app pressed')}
                  style={[
                    styles.pay,
                    {
                      backgroundColor: '#fff',
                      elevation: 7,
                      flexDirection: 'row',
                    },
                  ]}>
                  <Image
                    source={require('../../img/cash.png')}
                    style={{width: 30, height: 30, marginRight: 15}}
                  />
                  <Text style={{fontSize: 20, fontWeight: '700'}}>
                    Cash App
                  </Text>
                </Pressable>
              </View>
            </View>
          </Content>
          <Foooter />
        </Container>
      </Drawer>
    );
  }
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  secPicker: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    // backgroundColor: '#133',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 2,
  },
  pay: {
    backgroundColor: 'gray',
    width: 280,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
