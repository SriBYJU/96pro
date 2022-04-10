username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function addRoom()
    {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
    }
// Your web app's Firebase configuration

const firebaseConfig = {

      apiKey: "AIzaSyB4B-0kQ5Br-HKIPijAU5IXAzZBFb5IV5w",
    
      authDomain: "kwitter-website-3946e.firebaseapp.com",
    
      databaseURL: "https://kwitter-website-3946e-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-website-3946e",
    
      storageBucket: "kwitter-website-3946e.appspot.com",
    
      messagingSenderId: "735482580007",
    
      appId: "1:735482580007:web:971abf67cdf7d011e29202"
    
    };
    
    
    // Initialize Firebase
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
