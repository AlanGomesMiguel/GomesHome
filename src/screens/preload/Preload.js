import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from "react-native";
import { styles } from "./Styles";
import auth from '@react-native-firebase/auth';
import Logo from "../../assets/icons/home.svg";
import { useNavigation } from '@react-navigation/native';
import ApiFireLogin from '../../ApiFireLogin';






const Preload = (props) => {

    const navigation = useNavigation();

    const profile = {
        uid: props.uid,
        email: props.email,
        senha: props.senha
    }
    useEffect(() => {
       
        if (profile.uid === '' && profile.email === '' && profile.senha === '' ) {
            navigation.navigate("Login")
        } else {
            navigation.navigate("TabsNav")
        }
    }, [])



    return (
        <View style={styles.container}>
            <Logo width={150} height={150} fill="#708090" />
            <ActivityIndicator width="200" height="200" color="#000000" />
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
export default connect(mapStateToProps, mapDispatchToProps)(Preload);