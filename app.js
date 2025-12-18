import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8IUWHCQSNQilR0sQzYeOpJyUh8aUe654",
  authDomain: "my-first-firebase-webapp-4b571.firebaseapp.com",
  projectId: "my-first-firebase-webapp-4b571",
  storageBucket: "my-first-firebase-webapp-4b571.firebasestorage.app",
  messagingSenderId: "594474317360",
  appId: "1:594474317360:web:ede2c0ade7aee9bbdc5ff5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    result.innerText = "✅ 로그인 성공";
  } catch (error) {
    result.innerText = "❌ " + error.message;
  }
};
