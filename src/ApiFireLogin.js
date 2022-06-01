import auth from '@react-native-firebase/auth';

export default {

    Cadastrar: async (user, confirmPass) => {

        let cads = await auth().createUserWithEmailAndPassword(user, confirmPass)
            .then(() => {
                console.log('User account created & signed in!');
                return "Cadastrado";
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {

                    return 1;
                }

                if (error.code === 'auth/invalid-email') {

                    return 2;
                }

                console.error(error);
            })
        return cads;
    },

    RecupSenha: async (user) => {
        let recup = await auth().sendPasswordResetEmail(user);
    },

    login: async (user, pass) => {
        let login = await auth().signInWithEmailAndPassword(user, pass);
        return login;
    },

    sair: async () => {
        auth()
            .signOut()
            .then(() =>
                alert('Desconectado favor efetuar o login!!')
            );
        return true;
    },


    check: (user) => {
        let on =  auth().onAuthStateChanged(user);
        console.log(on);
        
    }
}