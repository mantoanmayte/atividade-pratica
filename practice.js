//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyA7cmRF2R3sdSfm1LClDGZxwdO6uM50IT8",
    authDomain: "chat-d225f.firebaseapp.com",
    databaseURL: "https://chat-d225f-default-rtdb.firebaseio.com",
    projectId: "chat-d225f",
    storageBucket: "chat-d225f.appspot.com",
    messagingSenderId: "347807316075",
    appId: "1:347807316075:web:f9d972ceab64b39c4bd92e"
};
firebase.initializeApp(firebaseConfig);

function addUser() {
    userName = document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
        purpose: "adicionar usuario"
    });

}