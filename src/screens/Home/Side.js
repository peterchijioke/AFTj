import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Content} from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import AsyncStorage from "@react-native-community/async-storage";
const {width, height} = Dimensions.get('window');

export class Side extends Component {
  render() {
    let icon = 25;
    return (
      <Content style={{backgroundColor: '#FFFFFF'}}>
        {/* first */}
        <View style={styles.profileView}>
          <View style={styles.userImage}>
            <Image
              source={require('../../img/user.png')}
              style={{width: 50, height: 50, borderRadius: 50}}
            />
          </View>
          <View style={{marginLeft: 11, flexDirection: 'row'}}>
            <View>
              <Pressable onPress={() => console.log('sign in')}>
                <Text style={styles.profText}>Log in</Text>
              </Pressable>
            </View>
            <Text
              style={{
                marginLeft: 10,
                marginRight: 10,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Or
            </Text>
            <View>
              <Pressable onPress={() => console.log('signup')}>
                <Text style={styles.profText}>Sign Up</Text>
              </Pressable>
            </View>
          </View>
        </View>
        {/* options btn */}
        <View style={{marginLeft: 15, marginTop: 40, marginRight: 15}}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => this.props.navigation.navigate('AFTJ')}>
            <SimpleLineIcons color={'#133'} name="note" size={icon} />
            <Text style={styles.txtOption}>AFTJ Church</Text>
          </TouchableOpacity>
          {/* 6 */}
          <View style={styles.lineA}></View>

          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => this.props.navigation.navigate('Search')}>
            <AntDesign color={'#133'} name="search1" size={icon} />
            <Text style={styles.txtOption}>Search</Text>
          </TouchableOpacity>
          <View style={styles.lineA}></View>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => this.props.navigation.navigate('download')}>
            <AntDesign color={'#133'} name="download" size={icon} />
            <Text style={styles.txtOption}>Download</Text>
          </TouchableOpacity>
          <View style={styles.lineA}></View>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            // onPress={this.unsetAsync}
            onPress={() => console.log('Settings')}>
            <AntDesign color={'#133'} name="setting" size={icon} />
            <Text style={styles.txtOption}>Settings</Text>
          </TouchableOpacity>
        </View>
      </Content>
    );
  }
}

export default Side;

const styles = StyleSheet.create({
  profileView: {
    height: width / 2 - 70,
    // elevation: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    // elevation:7
  },
  userImage: {
    backgroundColor: '#fff',
    height: '50%',
    width: '20%',
    borderRadius: 50,
    marginTop: 11,
    marginBottom: 11,
    marginLeft: 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#123',
    borderWidth: 2,
  },
  UserInfoView: {
    // backgroundColor: "#fff",
    height: '80%',
    width: '50%',
    // borderRadius: 30,
    marginTop: 25,
    marginLeft: 11,
    // padding: 15,
    // justifyContent: "center",
    // alignItems: "center",
  },
  txtOption: {color: '#133', marginHorizontal: 10, fontSize: 18},
  lineA: {
    // borderWidth: 1,
    // borderColor: "#133",
    marginTop: 16,
    marginBottom: 10,
  },
  profText: {fontSize: 16, fontWeight: 'bold'},
});
