import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Foooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{backgroundColor: '#fff'}}>
          <Button vertical>
            <Entypo name="home" size={20} />
            <Text>Home</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate('sermon')}>
            <FontAwesome name="book" size={20} />
            <Text>Sermon</Text>
          </Button>
          <Button vertical>
            <FontAwesome5 name="bible" size={20} />
            <Text>Bible</Text>
          </Button>
          <Button vertical>
            <AntDesign name="heart" size={20} />
            <Text>Giving</Text>
          </Button>
          <Button vertical>
            <Entypo name="info-with-circle" size={20} />
            <Text>About</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({});
