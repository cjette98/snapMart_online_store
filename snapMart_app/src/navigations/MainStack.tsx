import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, CartScreen } from "../screens";

const { Navigator, Screen} = createNativeStackNavigator();

const screens = {
    HomeScreen,
    CartScreen
}

export function MainNavigator() {
    return (
        <Navigator screenOptions={{headerShown:false}}>
            {Object.entries(screens).map(([name, Component]) => (
                <Screen key={name} name={name} component={Component}/>
            ))}
        </Navigator>
    )
}

export default MainNavigator;