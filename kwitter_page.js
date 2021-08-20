//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyColclgQtm2iykY-I8SaVT0tEF0zBVvTok",
      authDomain: "chat-bot-cc3fe.firebaseapp.com",
      databaseURL: "https://chat-bot-cc3fe.firebaseio.com",
      projectId: "chat-bot-cc3fe",
      storageBucket: "chat-bot-cc3fe.appspot.com",
      messagingSenderId: "288454232010",
      appId: "1:288454232010:web:2d0c5d9c40f795c9c9b133",
      measurementId: "G-JHGN1DB23X"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send(){

      msg=document.getElementById("msg").value

      firebase.database().ref(room_name).push({

      name:user_name,
      message:msg,
      like:0
 })
}

function logout()
  {

   window.location="index.html"}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
