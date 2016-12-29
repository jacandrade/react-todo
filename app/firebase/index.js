import firebase from 'firebase';

try{
    var config = {
        apiKey: "AIzaSyAlbVApSZssIiPpFUCWU5ASs2Z3WI5EnVs",
        authDomain: "react-todo-c1e11.firebaseapp.com",
        databaseURL: "https://react-todo-c1e11.firebaseio.com",
        storageBucket: "react-todo-c1e11.appspot.com",
        messagingSenderId: "210514492287"
    };

    firebase.initializeApp(config);
}catch(e){

}

export var firebaseRef = firebase.database().ref();
export default firebase;
