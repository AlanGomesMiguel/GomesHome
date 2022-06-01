import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./Styles";
import ApiFireStore from "../../ApiFireStore";
//import { useNavigation } from '@react-navigation/native';
import User from "../../assets/icons/person.svg";
//import Lock from "../../assets/icons/lock.svg";
//import Logo from "../../assets/icons/home.svg";




const Config = (props) => {

    const avatar = props.avatar;



    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                flexDirection: "row",
                height: 65,
                width: "85%",
            }}>
                <View style={{
                    justifyContent: "center",
                    alignContent: "center",
                    alignContent: "center",
                    borderRadius: 30,
                    borderWidth: 1,
                    height: 60,
                    width: 60
                }}>
                </View>
                <>
                    {avatar ?
                        <Image source={{uri: avatar}} />
                        :
                        <User/>
                    }
                </>

                <View >
                    <Text>Nome:</Text>
                    <TextInput
                        style={{
                            marginStart: 20
                        }}
                        placeholder="Digite Seu Nome!!"
                        placeholderTextColor={"#000"}
                        keyboardType="email-address"
                    />


                </View>
            </View>

        </SafeAreaView>

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
export default connect(mapStateToProps, mapDispatchToProps)(Config);