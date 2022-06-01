import React from "react";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text} from "react-native";







const Search = (props) => {

    return (
        <SafeAreaView>

            <View>
                <Text>
                    Buscar
                </Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Search); 