import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQdMm4n0rM-FdVtutWpDoMwpsu3FA_Dr8",
  authDomain: "tyzy-6f96c.firebaseapp.com",
  projectId: "tyzy-6f96c",
  storageBucket: "tyzy-6f96c.appspot.com",
  messagingSenderId: "392318524349",
  appId: "1:392318524349:web:4abee0f4a44efe4b5310d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider()
export const facebook = new FacebookAuthProvider(app)

export default app;