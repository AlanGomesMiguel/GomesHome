import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput, Button } from "react-native";
import { styles } from "./Styles";
import { useNavigation } from '@react-navigation/native';
import User from "../../assets/icons/person.svg";
import Lock from "../../assets/icons/lock.svg";
import Logo from "../../assets/icons/home.svg";
import ApiFireLogin from "../../ApiFireLogin";




const Cadastro = (props) => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('')

    const navigation = useNavigation();



    const Cad = async (user, confirmPass ) => {
     
        let Cadastro = await ApiFireLogin.Cadastrar(user, confirmPass);
        console.log(Cadastro);  
        if(Cadastro === "Cadastrado"){
            alert("Efetue o login!!");
            navigation.navigate("Login");
        }else{
            if(Cadastro==1){
                alert("E-mail já esta em uso !");
            }else{
                alert("E-mail invalido !");
            }
        }   
    }

    useEffect(() => {
        setUser('')
        setConfirmPass('')
        setPass('')
    }, [])


    const Login = () => {
        if (user == '' && pass == '' && confirmPass == '') {
            alert("Preencha todos os campos !!")
        } else {
            if (pass == confirmPass) {
                setUser('')
                setConfirmPass('')
                setPass('')
                Cad(user, confirmPass)
            } else {
                setConfirmPass('')
                setPass('')
                alert("As Senhas Não Conferem!!")
            }
        }

    }








    return (
        <SafeAreaView style={styles.container}>
            <Logo width={150} height={150} fill="#708090" />
            <View style={{
                flexDirection: "row",
                width: "85%",
                marginTop: 25,
                borderRadius: 15,
                borderWidth: 2,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "flex-start",
            }} >
                <View
                    style={{
                        marginLeft: 15,
                        marginRight: 15,
                    }}
                >
                    <User width={25} height={25} fill="#000" />
                </View>
                <TextInput
                    style={{
                        marginStart: 20
                    }}
                    placeholder="Digite Seu Email !!"
                    placeholderTextColor={"#000"}
                    onChangeText={e => setUser(e)}
                    keyboardType="email-address"
                    value={user}
                />
            </View>
            <View style={{
                flexDirection: "row",
                width: "85%",
                marginTop: 25,
                borderRadius: 15,
                borderWidth: 2,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "flex-start",
            }}>
                <View
                    style={{
                        marginLeft: 15,
                        marginRight: 15,
                    }}
                >
                    <Lock width={25} height={25} fill="#000" />
                </View>

                <TextInput
                    style={{
                        marginStart: 20
                    }}
                    placeholderTextColor={"#000"}
                    placeholder="Digite Sua Senha !!"
                    onChangeText={e => setPass(e)}
                    textContentType="password"
                    value={pass}
                />
            </View>
            <View style={{
                flexDirection: "row",
                width: "85%",
                marginTop: 25,
                borderRadius: 15,
                borderWidth: 2,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "flex-start",
            }}>
                <View
                    style={{
                        marginLeft: 15,
                        marginRight: 15,
                    }}
                >
                    <Lock width={25} height={25} fill="#000" />
                </View>

                <TextInput
                    style={{
                        marginStart: 20
                    }}
                    placeholderTextColor={"#000"}
                    placeholder="Confirme Sua Senha !!"
                    onChangeText={e => setConfirmPass(e)}
                    textContentType="password"
                    value={confirmPass}
                />
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        height: 50,
                        width: 200,
                        marginTop: 35,
                        borderRadius: 15,
                        borderWidth: 2,
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center"
                    }}
                    onPress={Login}
                >
                    <Text
                        style={{
                            color: "#000",
                            fontWeight: "bold",
                            fontSize: 20
                        }}
                    >
                        Cadastrar !!
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const mapStateToProps = ( state ) => {
    return{
        nome: state.userReducer.nome,
        email:state.userReducer.email,
        senha:state.userReducer.senha,
        uid:state.userReducer.uid
    };
        
}

const mapDispatchToProps = ( dispatch ) => {
    return{
        setUserNome: (nome) => dispatch({type:'SET_NOME', payload:{nome}}),
        setUserUid: (uid) => dispatch({type:'SET_UID', payload:{uid}}),
        setUserEmail: (email) => dispatch({type:'SET_EMAIL', payload:{email}}),
        setUserSenha: (senha) => dispatch({type:'SET_SENHA', payload:{senha}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);