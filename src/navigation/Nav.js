import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { globalStyles } from '../../styles/global';

import Home from '../screens/Home';
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

export default function Nav({navigation}) {

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={({navigation}) => ({
                        title: 'TrackO',
                    headerStyle: {
                        elevation: 30,
                        backgroundColor: 'white'
                    },
                    headerShown: true,
                    headerRight: (props) => (
                        <View style={globalStyles.headerMargin}>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Profile")}>
                                <MaterialCommunityIcons name="face-man" size={25} />
                            </TouchableOpacity>
                        </View>
                    ),
                    })}
                />

                <Stack.Screen 
                    name="Profile"
                    component={Profile}
                    options={{ title: 'Profile',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerShown: true,
                    // put headerShown to true for header
                }}
                />

            </Stack.Navigator>
        </NavigationContainer>

)};