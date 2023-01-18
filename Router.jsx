import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Home } from "./src/pages/Home";
import { Login } from "./src/pages/Login";
import { Register } from "./src/pages/Register";
import { Search } from "./src/pages/Search";

const Stack = createNativeStackNavigator();



export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "",
            headerTransparent: true,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "",
            headerTransparent: true,
            headerShadowVisible: false,
            headerBackVisible: false
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerTransparent: true,
            headerShadowVisible: false,
            headerBackVisible: false
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: "",
            headerTransparent: true,
            headerShadowVisible: false,
            headerBackVisible: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
