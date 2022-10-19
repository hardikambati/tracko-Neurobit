import React, { useState } from "react";
import { Button, Text, TextInput, View, Modal, Image } from 'react-native';
import { globalStyles } from '../../styles/global';


export default function Profile() {

    return (
        <View>
            <View style={globalStyles.profileContainer}>
                <Image source={require('../../assets/user.jpg')}
                    resizeMode="cover"
                    style={globalStyles.profileImage}
                />

                <Text style={globalStyles.pfont1}>Hardik Ambati</Text>
                <Text style={globalStyles.pfont2}>hardikambati69@gmail.com</Text>
                <Text style={globalStyles.pfont3}>VN, Pune, India</Text>
            </View>
        </View>
    );
}