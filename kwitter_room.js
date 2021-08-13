
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
document.getElementById("user_name").innerHTML="welcome   " + user_name + "!";


function addRoom(){

room_name=document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update

({ purpose:"addroom_name"
})
window.location="kwitter_page.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";
 apshot.forEach(function(childSnapshot)
  {childKey  = childSnapshot.key;
       Room_names = childKey;
     console.log("room_name -", room_name)
     row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML +=row
      });});}
getData();
