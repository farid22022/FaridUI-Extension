// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAejxTQV6o31lA5sf0ACugW0w6YuHrxKPA",
  authDomain: "faridui.firebaseapp.com",
  projectId: "faridui",
  storageBucket: "faridui.firebasestorage.app",
  messagingSenderId: "44903950476",
  appId: "1:44903950476:web:2c62aa99efa6bc88b833a9",
  measurementId: "G-KX9CW5GV2G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);