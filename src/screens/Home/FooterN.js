import React, {useEffect, useRef, useState} from 'react';

import {View, Text, Dimensions, StyleSheet, Pressable} from 'react-native';
import {Footer} from 'native-base';
import moment from 'moment';

const {height, width} = Dimensions.get('window');

const FooterN = () => {
  const [timeDays, setTimerDays] = useState('00');
  const [timeHours, setTimeHours] = useState('00');
  const [timeMinutes, setTimeMinutes] = useState('00');
  const [timeSeconds, setTimeSeconds] = useState('00');
  const [monthOf, setMonth] = useState('00');
  let interval = useRef();

  const startTimer = () => {
    const now = new Date();

    const day = now.getDay() + 6;
    const year = moment().format('YYYY');
    const monthM = moment().format('MMMM');

    const data = `December 0${day} ${year} 00:00:000`;
    const countdownDate = new Date(data).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimeHours(hours);
        setTimeMinutes(minutes);
        setTimeSeconds(seconds);
        setTimerDays(days);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <Footer
      style={{
        backgroundColor: 'skyblue',
      }}>
      <View
        style={{
          width: width / 3,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
        }}>
        <Pressable onPress={() => console.log('next service')}>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            NEXT SERVICE COUNTDOWN
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          // backgroundColor: "skyblue",
          width: width - 120,
          flexDirection: 'row',
          paddingRight: 5,
          marginLeft: 25,
        }}>
        <View style={[styles.viewTT, {marginRight: 18}]}>
          <Text style={[styles.inText, {fontSize: 16}]}>{timeDays}</Text>
          <Text style={styles.inText}>DAYS</Text>
        </View>
        <View style={[styles.viewTT, {marginRight: 18}]}>
          <Text style={[styles.inText, {fontSize: 16}]}>{timeHours}</Text>
          <Text style={[styles.inText]}>HOURS</Text>
        </View>
        <View style={[styles.viewTT, {marginRight: 18}]}>
          <Text style={[styles.inText, {fontSize: 16}]}>{timeMinutes}</Text>
          <Text style={styles.inText}>MINUTES</Text>
        </View>
        <View style={[styles.viewTT, {marginRight: 10}]}>
          <Text style={[styles.inText, {fontSize: 16}]}>{timeSeconds}</Text>
          <Text style={styles.inText}>SECONDS</Text>
        </View>
      </View>
    </Footer>
  );
};

export default FooterN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  child: {
    height: height - 110,
    width,
    justifyContent: 'center',
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
  icon: {
    marginLeft: 10,
    position: 'absolute',
    zIndex: 1,
    // top:
  },
  inText: {textAlign: 'center', color: '#fff', fontSize: 10},
  viewTT: {justifyContent: 'center', alignItems: 'center'},
});
