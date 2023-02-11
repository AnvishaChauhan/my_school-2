// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCbyzqb-iZYu6T3Ct_KB4xgq5a12hZGhkM",
    authDomain: "kendriya-vidyalaya-hamirpur.firebaseapp.com",
    projectId: "kendriya-vidyalaya-hamirpur",
    storageBucket: "kendriya-vidyalaya-hamirpur.appspot.com",
    messagingSenderId: "29652148581",
    appId: "1:29652148581:web:6bd64c5327baed6aed018c"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";

}



