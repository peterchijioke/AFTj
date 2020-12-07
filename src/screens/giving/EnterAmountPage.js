import React from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {Container, Header, Body, Title, Right, Left, Button} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EnterAmountPage = () => {
  return (
    <Container>
      <Header androidStatusBarColor="#000" style={{backgroundColor: '#fff'}}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <AntDesign name="arrowleft" color="#000" size={20} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: '#000'}}>Giving</Title>
        </Body>
        <Right>
          <Button transparent></Button>
        </Right>
      </Header>
      <View style={styles.secPicker}>
        <Text style={{fontSize: 20, marginBottom: 20}}>Enter Amount</Text>
        {/* ============================================================= */}

        <TextInput
          placeholder="Enter amount"
          style={styles.textInput}
          keyboardType="number-pad"
        />

        {/* ======================================== */}
        <Pressable
          style={styles.pay}
          onPress={() => console.log('Payment Continue Clicked.')}>
          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
            Continue
          </Text>
        </Pressable>
      </View>
    </Container>
  );
};
// church.aftjdigital.com\/api\/prayerrequest

export default EnterAmountPage;

const styles = StyleSheet.create({
  secPicker: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: '#133',
    borderRadius: 6,
  },
  pay: {
    backgroundColor: 'gray',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 30,
  },
  textInput: {
    fontSize: 18,
    // backgroundColor: '#133',
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});
