import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {regx} from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signin} from '../../redux/actions/login.action';
import {useDispatch} from 'react-redux';
import {HomeScreen} from '../HomeScreen';
import { LoaderContext } from '../../utils/contexts';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [eye, setEye] = useState(false);
  const [visible, setVisible] = useState(true);

  const {showLoader, hideLoader} = React.useContext(LoaderContext);
  const dispatch = useDispatch();

  const _onClick = async () => {
    showLoader()
    if (email && password) {
      const response = await dispatch(signin(screen));
      console.log(response?.token);
      if (response && response?.token) {
        navigation.navigate('HomeScreen');
        hideLoader()
      } else {
        Alert.alert('invalid email/password');
        hideLoader()
      }
    } else {
      Alert.alert('please enter email/password');
      hideLoader()
    }
  };

  const screen = {
    email: email,
    password: password,
  };
  return (
    <React.Fragment>
      <ScrollView style={{flex: 1}}>
        <View>
          <TextInput
            style={styles.Emailinput}
            name={'email'}
            placeholder="Email"
            onChangeText={value => setEmail(value)}
          />
          {!email && isSubmit ? (
            <Text style={{color: 'red', marginLeft: '5%'}}>
              Please enter Email id
            </Text>
          ) : !regx.email.test(email) ? (
            <Text style={{color: 'red', marginLeft: '5%'}}>
              Please enter valid Email id
            </Text>
          ) : null}
          <View>
            <TextInput
              style={styles.Passwordinput}
              name="password"
              onChangeText={value => setPassword(value)}
              placeholder="Password"
              secureTextEntry={visible}
            />
            <Icons
              style={{position: 'absolute', right: 50, top: 20}}
              name={eye === false ? 'eye-off' : 'eye'}
              size={30}
              color="black"
              onPress={() => {
                setEye(!eye);
                setVisible(!visible);
              }}
            />
          </View>
          {!password && isSubmit && (
            <Text style={{color: 'red', marginLeft: '5%'}}>
              Please enter Password
            </Text>
          )}
        </View>
        <View>
          <TouchableOpacity onPress={_onClick} style={styles.LoginMainBtn}>
            <Text style={styles.LoginBtn(!email || !password)}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 85,
    marginTop: 80,
  },
  Emailinput: {
    height: 50,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    borderColor: '#db699d',
    backgroundColor: 'white',
    marginTop: 80,
  },
  Passwordinput: {
    height: 50,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  LoginBtn: value => ({
    backgroundColor: value ? 'gray' : 'blue',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    padding: 10,
    fontWeight: '600',
    fontSize: 20,
    marginTop: 80,
  }),
  LoginMainBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
  },
});
