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

  function jihan()
  {

   send=document.getElementById("send").value
   

firebase.database().ref("/").child(send).update

       ({

       purpose:"addinguser",
       reason:"newuser"





       })
  }