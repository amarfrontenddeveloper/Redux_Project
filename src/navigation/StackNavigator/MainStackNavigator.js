import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomNavigator from '../BottomNavigator';
import { LogoutAction } from '../../redux/actions/logout.action';
const Stack = createStackNavigator();



function MainStackNavigator() {
  const dispatch = useDispatch();
  const createTwoButtonAlert = () =>
    Alert.alert('Confirm Logout', 'Are you Sure ? ', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancelled'),
      },
      {
        text: 'OK',
        onPress: () => dispatch(LogoutAction())
      },
    ]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Icons name="shuffle-variant" size={30} color="black" />
        ),
        headerTitle: () => (
          <Image
            style={styles.logo}
            source={require('../../assets/img/logo.png')}
          />
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => createTwoButtonAlert()}>
            <Icons name="logout" size={30} color="black" />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="HomeScreen" component={BottomNavigator} />
      {/* <Stack.Screen name="ProductDetails" component={ProductDetails} /> */}
    </Stack.Navigator>
  );
}
export default MainStackNavigator;

const styles = StyleSheet.create({
  logo: {
    width: 190,
    height: 40,
    marginLeft: 10,
    marginTop: 18,
    // marginHorizontal:'10%'
  },
});
