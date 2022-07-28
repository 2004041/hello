import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RecyclerViewBackedScrollViewBase,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#C8B6E2',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#7A86B6',
          width: 720,
          height: 700,
        }}>
        <View
          style={{
            backgroundColor: '#C8B6E2',
            flex: 0.2,
            marginHorizontal: 15,
            marginTop: 230,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 60,
              fontWeight: 'bold',
            }}>
            KAMUS BESAR
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 630,
          height: 60,
          backgroundColor: '#C8B6E2',
          flex: 0,
          marginHorizontal: 50,
          marginTop: 160,
          marginVertical: -240,
          borderRadius: 20,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Silahkan Masuk / Buat akun Terlebih Dahulu
        </Text>
      </View>
      <TouchableOpacity>
        <View
          style={{
            width: 630,
            height: 60,
            backgroundColor: '#7A86B6',
            marginHorizontal: 50,
            marginTop: 280,
            marginVertical: -240,
            borderRadius: 20,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            MASUK
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            width: 630,
            height: 60,
            backgroundColor: '#7A86B6',
            flex: 0,
            marginHorizontal: 50,
            marginTop: 300,
            marginVertical: -240,
            borderRadius: 20,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            BUAT AKUN
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
