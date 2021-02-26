import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import DashboardScreen from "./src/screens/Dashboard";
import HomeScreen from "./src/screens/Home";
import Store from "./src/store";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store()}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
