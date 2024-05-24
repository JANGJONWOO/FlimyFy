// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZoOwwzZWzJjcVTuB62RZnqm3Q0ZORgls",
    authDomain: "flimyfy.firebaseapp.com",
    projectId: "flimyfy",
    storageBucket: "flimyfy.appspot.com",
    messagingSenderId: "125823328011",
    appId: "1:125823328011:web:a919fe2e931fbd16854c0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register button
document.getElementById('register').addEventListener('click', function (event) {
    event.preventDefault();
    // Input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("User registered:", userCredential.user);
            alert('Account Created Successfully');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
