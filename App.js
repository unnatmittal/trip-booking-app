import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import { Onboarding, DestinationDetail } from "./screens/";
import { COLORS, icons, SIZES } from "./constants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity
                style={{
                  marginRight: SIZES.padding,
                }}
                onPress={() => console.log("Pressed")}
              >
                <Image
                  source={icons.barMenu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
