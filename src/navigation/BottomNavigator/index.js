import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Community from '../../Screens/Community';
import HomeScreen from '../../Screens/HomeScreen';
import Message from '../../Screens/Messages';
import More from '../../Screens/More';
import Mystuff from '../../Screens/Mystuff';
// import Mystuff from '../../Screens/Mystuff';
const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Home') {
            iconName = focused ? 'home': 'home';
          } else if (route.name === 'Community') {
            iconName = focused ? 'account-details' : 'account-details';
          }
          else if (route.name === 'Mystuff') {
            iconName = focused ? 'bookmark' : 'bookmark';
          }
          else if (route.name === 'Message') {
            iconName = focused ? 'email-newsletter' : 'email-newsletter';
          }
          else if (route.name === 'More') {
            iconName = focused ? 'more' : 'more';
          }

          // You can return any component that you like here!
          return <Icons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#32a88d',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign:'center',
        headerShown:false
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Mystuff" component={Mystuff} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}
export default BottomNavigator