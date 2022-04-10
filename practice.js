// ADD YOUR FIREBASE LINKS
var firebaseConfig = {

    apiKey: "AIzaSyBI0a2lQjTGlqGNR3d2Qop9RC1yRMEekxU",
  
    authDomain: "kwitter-project-9d850.firebaseapp.com",
  
    databaseURL: "https://kwitter-project-9d850-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-project-9d850",
  
    storageBucket: "kwitter-project-9d850.appspot.com",
  
    messagingSenderId: "703801589138",
  
    appId: "1:703801589138:web:8f18daaace9eba45cd554b"
  
  };
  firebase.initializeApp(firebaseConfig);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}