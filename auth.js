import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// ================= REGISTER =================
document.getElementById("registerBtn")?.addEventListener("click", async () => {

const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

try{

const userCredential = await createUserWithEmailAndPassword(auth,email,password);

const user = userCredential.user;

await setDoc(doc(db,"users",user.uid),{

email:user.email,
name:"",
skillsOffer:[],
skillsWant:[],
bio:"",
timestamp:new Date()

});

alert("Registered Successfully");

window.location.href="profile.html";

}catch(error){

alert(error.message);

}

});


// ================= LOGIN =================
document.getElementById("loginBtn")?.addEventListener("click", async () => {

const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

try{

await signInWithEmailAndPassword(auth,email,password);

alert("Login Successful");

window.location.href="explore.html";

}catch(error){

alert(error.message);

}

});
