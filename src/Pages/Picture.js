import React from 'react';
import first from '../Assets/first.png';
import { Text, View } from 'react-native';

function Picture() {
  return (
    <>
      <View>
        <img src={first} style={{ width: '30vw', height: '100vh' }} alt='' />
        <Text style={{
          position: 'absolute', top: 453, left: 42, fontFamily: 'Roboto', fontSize: '30px', fontWeight: '900', width: '25vw'
          , lineHeight: '48px', letterSpacing: '0.02em', color: 'white'
        }}>Discover new things on Superapp</Text>
      </View>
    </>
  )
}

export default Picture;
