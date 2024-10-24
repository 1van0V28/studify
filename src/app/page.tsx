'use client'


import { HomePage } from '@/pages/HomePage'
import { FirestoreContext } from '@/app/context/firestoreContext'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: 'AIzaSyAzZG3UxSUF_4yy2QB-Te32DkLObt8Nr1g',
    authDomain: 'studify-7b73e.firebaseapp.com',
    projectId: 'studify-7b73e',
    storageBucket: 'studify-7b73e.appspot.com',
    messagingSenderId: '60435364130',
    appId: '1:60435364130:web:af184e0b0bc490860b4d7b',
    measurementId: 'G-ZL9380T08Z',
}



const app = initializeApp(firebaseConfig) // инициализируем firebase
const firestore = getFirestore(app) // создаём firestore

export default function Home() {
    return (
        <FirestoreContext.Provider value={firestore}>
            <HomePage />
        </FirestoreContext.Provider>
    )
}
