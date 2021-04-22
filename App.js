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
import {withAuthenticator, AmplifyTheme} from 'aws-amplify-react-native';
import {Auth} from 'aws-amplify';

/**
 * Custom theme
 * @type {*&{button: {[p: string]: *}}}
 */
const myTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: '#213152',
    borderRadius: 5,
  },
};
/**
 * Hide some fields
 * @type {{signUpFields: [{displayOrder: number, label: string, placeholder: string, type: string, key: string, required: boolean}], defaultCountryCode: string, hiddenDefaults: string[]}}
 */
const signUpConfig = {
  // header:'',
  signUpFields: [
    {
      label: 'Name',
      key: 'name',
      required: true,
      placeholder: 'Your name',
      type: 'string',
      displayOrder: 2,
    },
  ],
  defaultCountryCode: '254',
  hiddenDefaults: ['phone_number', 'username'],
};
const authConfig = {
  signUpConfig: signUpConfig,
  usernameAttributes: 'email',
  // theme: myTheme,
};
class App extends React.Component {
  state = {
    user: null,
  };
  componentDidMount() {
    Auth.currentUserInfo()
      .then(user => {
        console.log(user);
        this.setState({user: user});
      })
      .catch(error => {
        console.log('error');
      });
  }
  handleLogout = () => {
    Auth.signOut()
      .then(r => {
        //do nothing
      })
      .catch(err => {
        //handle sign out error
      });
  };
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
            <Text style={styles.salutation}>
              Hey {this.state.user ? this.state.user.attributes.name : ''},
            </Text>
            <Text style={styles.message}>adopt a pet near you!</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              //todo logout
              this.handleLogout();
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

export default withAuthenticator(App, authConfig);
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
