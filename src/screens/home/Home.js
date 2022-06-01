import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./Styles";
import ApiFireStore from "../../ApiFireStore";
//import { useNavigation } from '@react-navigation/native';
//import ApiFireLogin from "../../ApiFireLogin";
//import User from "../../assets/icons/person.svg";
//import Lock from "../../assets/icons/lock.svg";
//import Logo from "../../assets/icons/home.svg";




const Home = (props) => {


    useEffect(()=>{
        const list = async () =>{
            let listas = await ApiFireStore.listar();
            console.log(listas);
        }
        list()
    }, [])

    return (

        <View style={styles.container}>

            <Text>{props.email}</Text>
        </View>
    )
}


const mapStateToProps = (state) => {
    return {
        nome: state.userReducer.nome,
        email: state.userReducer.email,
        senha: state.userReducer.senha,
        uid: state.userReducer.uid,
        avatar: state.userReducer.avatar
    };

}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserNome: (nome) => dispatch({ type: 'SET_NOME', payload: { nome } }),
        setUserUid: (uid) => dispatch({ type: 'SET_UID', payload: { uid } }),
        setUserAvatar: (avatar) => dispatch({ type: 'SET_UID', payload: { avatar } }),
        setUserEmail: (email) => dispatch({ type: 'SET_EMAIL', payload: { email } }),
        setUserSenha: (senha) => dispatch({ type: 'SET_SENHA', payload: { senha } })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);