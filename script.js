// FIREBASE  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
  import { getFirestore, setDoc, doc, addDoc, collection, deleteDoc, getDoc, getDocs, query } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIIdXkhscYFyrxpEDF19QcTQgdVNmVvaw",
    authDomain: "mydemoproject-bd366.firebaseapp.com",
    projectId: "mydemoproject-bd366",
    storageBucket: "mydemoproject-bd366.appspot.com",
    messagingSenderId: "414730358177",
    appId: "1:414730358177:web:bed8aefcf22fb746fdcfe0",
    measurementId: "G-61WGL8404C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

// LOGIN & REGISTRO DE USUARIO 
    
document.getElementById("signUpButton").addEventListener("click", ()=> {
    const email = document.getElementById("signUpemail").value
    const password = document.getElementById("signUpPassword").value
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("user created")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
    });
})

document.getElementById("loginButton").addEventListener("click", () => {
    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("User loged in")
        window.open("https://thebridge.tech", "_blank")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
    });
})



// await setDoc(doc(db, "Halloween", "User"), {
//     name: "Taniu",
//     goodQuestions: "3",
//     errors: "7"
// });

// // recoger info de interacción y crear variable (para quiz)
// // Firebase QUIZ 
// const q = query(collection(db, "Halloween"));
// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
// });

