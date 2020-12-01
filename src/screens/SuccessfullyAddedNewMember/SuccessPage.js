import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Title} from 'native-base';
const {width, height} = Dimensions.get('window');

const SuccessPage = ({navigation}) => {
  return (
    <Container>
      <Header androidStatusBarColor="#000" style={{backgroundColor: '#fff'}}>
        <Left>
          <Button onPress={()=>navigation.goBack()} transparent>
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

      <View style={{height: height - 250, marginTop: 80}}>
        <Image
          source={require('../../img/tickGood.png')}
          style={{width: 150, height: 150, alignSelf: 'center'}}
        />
        <View
          style={{
            width: width / 2 + 70,
            alignSelf: 'center',
            
          }}>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 10,
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Congratulations !
          </Text>
          <View
            style={{
              width: width / 2,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                justifyContent: 'center',
                textAlign: 'center',
                marginBottom: 30,
              }}>
              Your registration as a new member was successfull
            </Text>
          </View>
          <Text
            style={{
              // justifyContent: 'center',
              textAlign: 'center',
            }}>
            Click on the button below to have access to our
            <Text style={{fontWeight: 'bold'}}> New Member Resources</Text>
          </Text>
        </View>
        <Pressable
          onPress={() => console.log('Continue to new member resource btn was pressed.')}
          style={{
            marginTop: 35,
            alignSelf: 'center',
            width: width / 2 + 70,
            backgroundColor: 'gray',
            justifyContent: 'center',
            borderRadius: 10,
            height: width / 7,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
              color: '#000',
            }}>
            Continue
          </Text>
        </Pressable>
      </View>
    </Container>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({});
