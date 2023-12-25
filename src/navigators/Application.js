import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Dashboard, Media, More, Watch } from "@/screens";
import { useTheme } from "@/theme";
import Detail from "@/screens/Detail/Detail";
import Booking from "@/screens/Booking/Booking";
import Checkout from "@/screens/Checkout/Checkout";
import VideoScreen from "@/screens/Video/VideoScreen";
import { Icon } from "react-native-paper";
import { Text } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Watch"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 5,
          paddingTop: 10,
          backgroundColor: "#2E2739",
          borderRadius: 20,
          height: 85,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                source="view-dashboard"
                color={focused ? "white" : "gray"}
                size={30}
              />
            );
          },
          tabBarLabel: ({ color, focused }) => {
            return (
              <Text style={{ color: focused ? "white" : "gray", fontSize: 11 }}>
                Dashboard
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Watch"
        component={Watch}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                source="play-box"
                color={focused ? "white" : "gray"}
                size={30}
              />
            );
          },
          tabBarLabel: ({ color, focused }) => {
            return (
              <Text style={{ color: focused ? "white" : "gray", fontSize: 11 }}>
                Watch
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Media"
        component={Media}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                source="folder-multiple"
                color={focused ? "white" : "gray"}
                size={30}
              />
            );
          },
          tabBarLabel: ({ color, focused }) => {
            return (
              <Text style={{ color: focused ? "white" : "gray", fontSize: 11 }}>
                Media Library
              </Text>
            );
          },
        }}
      />

      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                source="format-list-bulleted"
                color={focused ? "white" : "gray"}
                size={30}
              />
            );
          },
          tabBarLabel: ({ color, focused }) => {
            return (
              <Text style={{ color: focused ? "white" : "gray", fontSize: 11 }}>
                More
              </Text>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTab" component={MyTabs} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Video" component={VideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default ApplicationNavigator;
