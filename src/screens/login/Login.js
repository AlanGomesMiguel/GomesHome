import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./Styles";
import { useNavigation } from '@react-navigation/native';
import ApiFireLogin from "../../ApiFireLogin";
import User from "../../assets/icons/person.svg";
import Lock from "../../assets/icons/lock.svg";
import Logo from "../../assets/icons/home.svg";






const Login = (props) => {



    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');


    const navigation = useNavigation();

    //navigation.navigate("Home")

    const Cad = () => {
        navigation.navigate("Cadastro")
    }
    const ResetSenha = () => {
        navigation.navigate("ResetSenha")
    }

    const Login = async () => {

        if (user != '' && pass != '') {
            let log = await ApiFireLogin.login(user, pass);
            console.log(JSON.stringify(log))
            if (log) {
                props.setUserNome(log.user.displayName);
                props.setUserEmail(log.user.email);
                props.setUserSenha(pass);
                props.setUserUid(log.user.uid)
                navigation.navigate("Home")
            } else {
                alert("Verifique o email e senha ")
            }
        } else {
            alert("E-mail e Senha não podem ser vasios!!")
        }


        console.log("setUserEmail: ", props.email);
        console.log("setUserNome: ", props.Nome);
        console.log("setUserUid: ", props.uid);
        console.log("setUserSenha: ", props.senha);
    }


    return (
        <SafeAreaView style={styles.container}>
            <Logo width={120} height={120} fill="#6693E5" />
            <View style={{
                flexDirection: "row",
                backgroundColor:"#F5FFFA",
                height:40,
                width: "75%",
                marginTop: 10,
                padding: 1,
                borderRadius: 15,
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "flex-start",
            }} >
                <View
                    style={{
                        marginLeft: 10,
                        marginRight: 10,
                    }}
                >
                    <User width={25} height={25} fill="#000" />
                </View>

                <TextInput
                    style={{
                        marginStart: 5
                    }}
                    placeholder="Digite Seu Email !!"
                    value={user}
                    placeholderTextColor={"#000"}
                    onChangeText={e => setUser(e)}
                    keyboardType="email-address"
                />
            </View>
            <View style={{
                flexDirection: "row",
                backgroundColor:"#F5FFFA",
                height:40,
                width: "75%",
                marginTop: 10,
                padding: 1,
                borderRadius: 15,
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "flex-start",
            }}>
                <View
                    style={{
                        marginLeft: 10,
                        marginRight: 10,
                    }}
                >
                    <Lock width={25} height={25} fill="#000" />
                </View>

                <TextInput
                    style={{
                        marginStart: 5
                    }}
                    placeholderTextColor={"#000"}
                    secureTextEntry={true}
                    placeholder="Digite Sua Senha !!"
                    onChangeText={e => setPass(e)}
                    textContentType="password"

                />
            </View>
            <View>
                <TouchableOpacity
                    onPress={Login}
                    style={{
                        height: 40,
                        width: 288,
                        backgroundColor:"#6693E5",
                        marginTop: 15,
                        padding: 1,
                        borderRadius: 15,
                        borderWidth: 1,
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text
                        style={{
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: 16
                        }}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent:"space-evenly",
                    height: 40,
                    width: "90%",
                    marginTop: 80,
                }}
            >
                <TouchableOpacity
                    onPress={ResetSenha}
                >
                    <Text
                        style={{
                            color: "#000",
                            fontSize: 15
                        }}
                    >Esqueci a senha</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={Cad}
                >
                    <Text
                        style={{
                            color: "#000",
                            fontSize: 15
                        }}
                    >Cadastrar</Text>
                </TouchableOpacity>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);