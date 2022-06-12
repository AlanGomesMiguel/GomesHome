import firestore from '@react-native-firebase/firestore';

export default{

    listar: async () =>{

        let docs = await firestore().collection("user").get();

        return docs;

    },

    addCollection: async (titulo) => {
        const usersCollectionRef = await collection(bd, titulo);
       
    },

    lerFire: async () => {
        const querySnapshot = await getDocs(collection(bd, "categorias"));
        querySnapshot.forEach((doc) => {

        });
    },

    tempoReal: async () => {
        
        let n = 1;
        function onResult(QuerySnapshot) {
            alert("Lista Mudou");
            return "mudou";
        }

        function onError(error) {
            
        }

        firestore().collection('item').onSnapshot(onResult, onError);
    },

    addNovoItem: async ({ data, categoria, titulo, value })=>{
        firestore()
        .collection('item')
        .doc(titulo)
        .set({
            data: data,
            categoria: categoria,
            titulo: titulo,
            value: value
        })
        .then(() => {
          console.log('User added!');
        });
    },
    addNovoItemBanco: async ({ banco ,data, categoria, titulo, value })=>{
        firestore()
        .collection(banco)
        .doc(titulo)
        .set({
            data: data,
            categoria: categoria,
            titulo: titulo,
            value: value
        })
        .then(() => {
          console.log('User added!');
        });
    },


    consultaFiltros: async (categoria, titulo) => {
        const docRef = doc(bd, "item", titulo);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            
        } else {
            // doc.data() will be undefined in this case
            
        }
    },

    cadFireDocItens: async ({ data, categoria, titulo, value }) => {

        try {
            const docRef = await addDoc(collection(bd, "item"), {
                data: data,
                categoria: categoria,
                titulo: titulo,
                value: value
            });

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    },

    getItensList: async () => {

        let List = [];
        await firestore().collection('item').get().then(querySnapshot => {
            console.log('Total users: ', querySnapshot.size);
            querySnapshot.forEach(documentSnapshot => {

                console.log(documentSnapshot.data().categoria);
                let item = {
                    id: documentSnapshot.id,
                    data: documentSnapshot.data().data,
                    categoria: documentSnapshot.data().categoria,
                    titulo: documentSnapshot.data().titulo,
                    value: documentSnapshot.data().value
                }
                List.push({ item });
            });

            console.log(List)
            return List;

        });

    },

    getItensListBanco: async (banco) => {

        let List = [];
        await firestore().collection(banco).get().then(querySnapshot => {
            console.log('Total users: ', querySnapshot.size);
            querySnapshot.forEach(documentSnapshot => {

                console.log(documentSnapshot.data().categoria);
                let item = {
                    id: documentSnapshot.id,
                    data: documentSnapshot.data().data,
                    categoria: documentSnapshot.data().categoria,
                    titulo: documentSnapshot.data().titulo,
                    value: documentSnapshot.data().value
                }
                List.push({ item });
            });

            console.log(List)
            return List;

        });

    },

    getItensList2: async () => {

        let List = [];
        const querySnapshot = await getDocs(collection(bd, "item"));
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            List.push({
                id: `${data.titulo}-${data.value}`,
                data: data.data,
                categoria: data.categoria,
                titulo: data.titulo,
                value: data.value
            });
        });

        return List;
    },

    setNowDoc: async ({ data, categoria, titulo, value }) => {

        const unsub = onSnapshot(doc(bd, "item", titulo), (doc) => {
            console.log("Current data: ", doc.data());
        });

        const nowDoc = await setDoc(doc(bd, "item", titulo), {
            data: data,
            categoria: categoria,
            titulo: titulo,
            value: value
        });
        unsub();
    },


}

