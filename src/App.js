import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from "./screens/preload/Preload";
import Login from "./screens/login/Login";
import Home  from "./screens/home/Home";
import Cadastro from "./screens/cadasstro/Cadastro";

import { Store, persistor } from "./store";
import ResetSenha from "./screens/resetSenha/ResetSenha";
import { TabsNav } from "./screens/TabsNav/TabsNav";


export default App = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Provider store={Store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRoutName='Login'
                        screenOptions={{
                            headerShown: false                          
                        }}
                    >
                        <Stack.Screen name="Preload" component={Preload} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="TabsNav" component={TabsNav} />
                        <Stack.Screen name="Cadastro" component={Cadastro} />
                        <Stack.Screen name="ResetSenha" component={ResetSenha} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
