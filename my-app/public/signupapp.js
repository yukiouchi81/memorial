  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBxuHJPQsKTzumuU-XPeUeG-zLTZug3F1M",
    authDomain: "memorialgym-f5ce3.firebaseapp.com",
    databaseURL: "https://memorialgym-f5ce3-default-rtdb.firebaseio.com",
    projectId: "memorialgym-f5ce3",
    storageBucket: "memorialgym-f5ce3.appspot.com",
    messagingSenderId: "567780843830",
    appId: "1:567780843830:web:c9c04ad30289df71d91397"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const auth = getAuth()

//getting all the object from HTML
var fullName = document.getElementById("fullname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var copassword = document.getElementById("copassword")
window.signup = function (e) {
if(password)

    if(fullName.value == "" || email.value =="" || password.value ==""){
        alert("All Field Are Required")
    }
    if(password.value == copassword.value){
     
    }
    else{
        alert("Password Confirmation is Wrong")
        return false
    }

    e.preventDefault();
    var obj = {
      firstName: fullName.value,
      email: email.value,
      password: password.value,
    };
  
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        window.location.replace('HTML/login.html')
      // console.log(success.user.uid)
      alert("signup successfully")
    })
    .catch(function(err){
      alert("Error in " + err)
    });
   console.log()
    console.log(obj);
  };