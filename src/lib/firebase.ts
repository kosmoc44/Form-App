import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_k5JTYKlcV2Fk6fmMdHxur5Y9mSFcxfM",
  authDomain: "form-project-2d32e.firebaseapp.com",
  projectId: "form-project-2d32e",
  storageBucket: "form-project-2d32e.appspot.com", // Исправлено название бакета
  messagingSenderId: "489241550544",
  appId: "1:489241550544:web:ad184b1ed586a5d7d8c8d5",
  measurementId: "G-MJKENFXK0G"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт сервисов
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
