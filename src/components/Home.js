import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from '../styles/styles';
export default Home = () => {
  const animation = useRef(null);
  useEffect(() => {
    animation.current.play(0, 30);
  });
  return (
    <View style={{ flex: 1, padding: '5%' }}>
      <Text style={styles.header}>Balloon Animation</Text>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LottieView
          ref={animation}
          loop={false}
          source={require('../assets/balloonAnimation.json')}
          style={{ height: 400, width: 400 }}
        />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[styles.button, { marginRight: '5%' }]}
            onPress={() => {
              animation.current?.play(30, 180);
            }}
          >
            <Text style={styles.buttonText}>FILL THE BALLOON</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              animation.current?.reset();
              animation.current?.play(0, 30);
            }}
          >
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
