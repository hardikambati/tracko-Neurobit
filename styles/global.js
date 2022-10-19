import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'

export const globalStyles = StyleSheet.create({

    headerMargin: {
        marginRight: 15
    },

    
    // FONTS

    font1: {
        color: 'white',
        fontSize:22,
        fontWeight:'bold',
        letterSpacing: 0.5
    },
    font2: {
        color: 'white',
        marginTop: 2, 
        fontSize:17,
        fontWeight:'bold',
    },
    font3: {
        color: 'white',
        fontSize:15,
        letterSpacing: 0.5
        // fontWeight:'bold',
    },
    font4G: {
        color: 'white',
        fontSize:13,
        marginTop: 2, 
        color: '#00bd09',
        letterSpacing: 0.5
        // fontWeight:'bold',
    },
    font4R: {
        fontSize:13,
        marginTop: 2, 
        color: '#ff143c',
        letterSpacing: 0.5
        // fontWeight:'bold',
    },
    font5: {
        fontSize: 14,
        letterSpacing: 0.5,
        fontWeight:'400',
    },
    font6R: {
        fontSize: 13,
        letterSpacing: 0.5,
        color: 'red',
        fontWeight:'bold',
    },
    font6G: {
        fontSize: 13,
        letterSpacing: 0.5,
        color: '#00bd09',
        fontWeight:'bold',
    },


    // HOME PAGE

    homeContainer1: {
        marginTop: 15,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#f9f9f9',
        backgroundColor: 'black',
        // borderWidth: 1,
        elevation: 5,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    homeContTop: {
    },
    homeContBottom: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    ImgContainer: {
        display: 'flex',
        flexDirection: 'row'
    },

    homeImg: {
        height: 40,
        width: 40,
        marginRight: 7
    },

    del: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 10
    },

    TodayTag: {
        marginTop: 20,
    },
    TodayFont: {
        marginBottom: 10, 
        fontSize:20,
        fontWeight:'bold',
        letterSpacing: 0.5,
        color: '#a3a3a3'
    },
    homeContainer2: {
        marginTop: 10,
        height: Dimensions.get('window').height*0.5,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#f7f7f7',
    },
    homeList: {
        marginTop: 10, 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 13,
    },
    homeListLeft: {
        display: 'flex',
        flexDirection: 'row',
    },
    homeListTextLeft: {
        fontSize: 14, 
        marginLeft: 5,
        marginBottom: 3,
        color: '#cfcfcf',
        letterSpacing: 0.2
    },
    addButtonContainer: {
        padding: 15,
        position: 'absolute',
        bottom:12,
        left:2,
        right:0,
        alignItems: 'center'
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // elevation: 3
    },

    inputBox: {
        width: 260,
        height: 45,
        margin: 8,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10, 
        backgroundColor: '#f7f7f7',
        borderEndWidth : 0,
        borderTopWidth : 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },

    modalButtons: {
        marginTop: 15,
    },
    modalSingleButton: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 10,
        elevation: 8,
        backgroundColor: "black",
        borderRadius: 25,
        paddingVertical: 14,
        paddingHorizontal: 50,
    },
    modalText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 0.6,
    },
    modalTextG: {
        color: '#00bd09',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 0.6,
    },
    modalTextR: {
        color: '#ff6b7f',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 0.6,
    }
});