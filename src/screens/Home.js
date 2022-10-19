import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View, Modal, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/global';
import AwesomeButton from "react-native-really-awesome-button";
import DatePicker from "expo-datepicker";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../context/AuthContext';

export default function Home({navigation}) {

    const { track, addTaskContext, deleteTaskContext, totalIncome, totalExpense } = React.useContext(AuthContext);

    const [modalVisible, setModalVisible] = useState(false);
    
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');


    useEffect(() => {
        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 

        if(mm<10) 
        {
            mm='0'+mm;
        } 

        setDate((yyyy + '/' + mm + '/' + dd));
    }, [])


    function addTaskEvent(category) {
        if(amount === 0 || description === '') {
            return;
        }

        addTaskContext(description, amount, date, category);
        setModalVisible(!modalVisible)

        setDescription('');
        setAmount(0);
    }


    return (
        <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
            
            <View style={globalStyles.homeContainer1}>
                <View style={globalStyles.homeContTop}>
                    <Text style={globalStyles.font1}>Balance</Text>
                    <Text style={globalStyles.font2}>
                        $ {(totalIncome - totalExpense) >= 0 ?
                              totalIncome - totalExpense
                              :
                              0
                          }
                    </Text>
                </View>

                <View style={globalStyles.homeContBottom}>
                    <View style={globalStyles.ImgContainer}>
                        <Image source={require('../../assets/up.png')}
                            resizeMode="cover"
                            style={globalStyles.homeImg}
                        />
                        <View>
                            <Text style={globalStyles.font3}>Income</Text>
                            <Text style={globalStyles.font4G}>$ {totalIncome}</Text>
                        </View>
                    </View>

                    <View style={globalStyles.ImgContainer}>
                        <Image source={require('../../assets/down.png')}
                            resizeMode="cover"
                            style={globalStyles.homeImg}
                        />
                        <View>
                            <Text style={globalStyles.font3}>Expenses</Text>
                            <Text style={globalStyles.font4R}>$ {totalExpense}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={globalStyles.TodayTag}>
                <View style={globalStyles.homeContainer2}>
                    <Text style={globalStyles.TodayFont}>Today</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        {track && track.map((item) => 
                            <View style={globalStyles.homeList} key={ item.id }>
                                <View>
                                    <View style={globalStyles.homeListLeft}>
                                        <Text style={globalStyles.font5}>{ item.description }</Text>
                                        <Text style={globalStyles.homeListTextLeft}>({item.date})</Text> 
                                    </View>
                                    <Text style={item.category === "income" ? globalStyles.font6G : globalStyles.font6R}>
                                        $ {item.amount} 
                                    </Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.5} style={globalStyles.del}
                                    onPress={() => deleteTaskContext(item.id)}
                                    >
                                    <MaterialCommunityIcons name="delete" color={'#a3a3a3'} size={25} />
                                </TouchableOpacity>
                            </View>
                        )}

                </ScrollView>
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
                            onChangeText = {text => setDescription(text)}
                            defaultValue={description}
                            value = {description}
                            autoFocus={true}
                        />

                        <TextInput
                            keyboardType="numeric"
                            style={globalStyles.inputBox}
                            variant="outline"
                            placeholder="Amount"
                            onChangeText = {text => setAmount(text)}
                            defaultValue={amount}
                            value = {amount}
                        />

                        <DatePicker
                            date={date}
                            onChange={(date) => setDate(date)}
                        />

                        <View style={globalStyles.modalButtons}>
                            <TouchableOpacity activeOpacity={0.8} style={globalStyles.modalSingleButton}
                                    onPress={() => addTaskEvent('income')}
                                    >
                                    <Text style={globalStyles.modalTextG}>Income</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={globalStyles.modalSingleButton}
                                    onPress={() => addTaskEvent('expense')}
                                    >
                                    <Text style={globalStyles.modalTextR}>Expense</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={globalStyles.modalSingleButton}
                                    onPress={() => setModalVisible(!modalVisible)}
                                    >
                                    <Text style={globalStyles.modalText}>Cancel</Text>
                            </TouchableOpacity>

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