import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HomeScreen} from './src/HomeScreen';
class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={'#F7F7FF'}
          barStyle={'dark-content'}
          animated
          translucent={false}
          showHideTransition={'fade'}
        />
        <View style={styles.toolBar}>
          <View>
            <Text style={styles.salutation}>Hey name,</Text>
            <Text style={styles.message}>adopt a pet near you!</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              //todo logout
            }}>
            <Text style={styles.logout}>LOGOUT</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.nearby}>Nearby results</Text>
        <HomeScreen />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7FF',
  },
  toolBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logout: {
    color: '#f48b2b',
    fontSize: 16,
    fontWeight: '100',
  },
  salutation: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#213152',
  },
  message: {
    fontSize: 14,
    fontWeight: '200',
    color: '#495469',
  },
  nearby: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#213152',
    paddingHorizontal: 20,
  },
});

export default App;
