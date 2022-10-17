import React, { useState } from "react";
import { Button, Text, TextInput, View, Modal, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import AwesomeButton from "react-native-really-awesome-button";
import DatePicker from "expo-datepicker";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date().toString());


    return (
        <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
            
            <View style={globalStyles.homeContainer1}>
                <View style={globalStyles.homeContTop}>
                    <Text style={globalStyles.font1}>Balance</Text>
                    <Text style={globalStyles.font2}>$ 1000</Text>
                </View>

                <View style={globalStyles.homeContBottom}>
                    <View style={globalStyles.ImgContainer}>
                        <Image source={require('../../assets/up.png')}
                            resizeMode="cover"
                            style={globalStyles.homeImg}
                        />
                        <View>
                            <Text style={globalStyles.font3}>Income</Text>
                            <Text style={globalStyles.font4G}>$ 3000</Text>
                        </View>
                    </View>

                    <View style={globalStyles.ImgContainer}>
                        <Image source={require('../../assets/down.png')}
                            resizeMode="cover"
                            style={globalStyles.homeImg}
                        />
                        <View>
                            <Text style={globalStyles.font3}>Expenses</Text>
                            <Text style={globalStyles.font4R}>$ 2000</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={globalStyles.TodayTag}>
                <View style={globalStyles.homeContainer2}>
                    <Text style={globalStyles.TodayFont}>Today</Text>
                    <View style={globalStyles.homeList}>
                        <Text style={globalStyles.font5}>Car-Tyre</Text>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={globalStyles.font6R}>$ 100</Text>
                            <TouchableOpacity activeOpacity={0.5} style={globalStyles.del}>
                                <MaterialCommunityIcons name="delete" color={'#a3a3a3'} size={18} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={globalStyles.homeList}>
                        <Text style={globalStyles.font5}>Dividends</Text>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={globalStyles.font6G}>$ 100</Text>
                            <TouchableOpacity activeOpacity={0.5} style={globalStyles.del}>
                                <MaterialCommunityIcons name="delete" color={'#a3a3a3'} size={18} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>



        {/* MODAL STARTS */}
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
            >
                <View style={globalStyles.centeredView}>
                    <View style={globalStyles.modalView}>
                        <TextInput
                            style={globalStyles.inputBox}
                            variant="outline"
                            placeholder="Description"
                        />

                        <TextInput
                            style={globalStyles.inputBox}
                            variant="outline"
                            placeholder="Amount"
                        />

                        <DatePicker
                            date={date}
                            onChange={(date) => setDate(date)}
                        />

                        <View style={globalStyles.modalButtons}>
                            <View style={globalStyles.singleButton}>
                                <AwesomeButton
                                    textColor='white'
                                    backgroundColor='black'
                                    backgroundShadow='#DDDDDD'
                                    backgroundDarker='#E0EAFC'
                                    raiseLevel={2}
                                    borderRadius={30}
                                    width={200}
                                    height={50}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    Income +
                                </AwesomeButton> 
                            </View>

                            <View style={globalStyles.singleButton}>
                                <AwesomeButton
                                    textColor='white'
                                    backgroundColor='black'
                                    backgroundShadow='#DDDDDD'
                                    backgroundDarker='#E0EAFC'
                                    raiseLevel={2}
                                    borderRadius={30}
                                    width={200}
                                    height={50}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    Expense -
                                </AwesomeButton> 
                            </View>

                            <View style={globalStyles.singleButton}>
                                <AwesomeButton
                                    textColor='white'
                                    backgroundColor='black'
                                    backgroundShadow='#DDDDDD'
                                    backgroundDarker='#E0EAFC'
                                    raiseLevel={2}
                                    borderRadius={30}
                                    width={200}
                                    height={50}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    Cancel
                                </AwesomeButton> 
                            </View>
                        </View>

                    </View>
                </View>

            </Modal>
        {/* MODAL ENDS */}




            <View style={globalStyles.addButtonContainer}>
                <AwesomeButton
                    textColor='white'
                    backgroundColor='black'
                    backgroundShadow='#DDDDDD'
                    backgroundDarker='#E0EAFC'
                    raiseLevel={2}
                    borderRadius={30}
                    width={200}
                    height={50}
                    onPress={() => setModalVisible(true)}
                >
                    ADD +
                </AwesomeButton>
            </View>

        </View>
    )
}