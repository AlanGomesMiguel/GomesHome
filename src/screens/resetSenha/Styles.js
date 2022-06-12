import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imagem: {
        width: 150,
        height: 150
    },
    reverse: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
    },
    saveAreaMap: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        marginBottom: 5,
        marginTop: 10
    },
    textInput: {
        backgroundColor: '#C0C0C0',
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        width: "85%",
        marginBottom: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    textCoords: {
        backgroundColor: '#C0C0C0',
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        width: "85%",
        marginBottom: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    sex: {
        height: 50,
        marginBottom: 10,
        borderRadius: 2
    },
    buttonCad: {
        backgroundColor: '#FFF',
        height: 45,
        borderWidth: 2,
        borderRadius: 15,
        paddingLeft: 5,
        width: 300,
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    buttonList: {
        backgroundColor: '#FFF',
        height: 45,
        borderWidth: 2,
        borderRadius: 15,
        paddingLeft: 5,
        width: 300,
        marginBottom: 20,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    fonte: {
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: 'bold'
    },
    fonteBotton: {
        fontFamily: 'serif',
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: 'bold'
    },
    fonteTitle: {
        fontFamily: 'serif',
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF"
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    idade: {
        backgroundColor: '#FFF',
    }
})
