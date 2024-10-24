import firebase from 'firebase/compat/app'
import { Firestore } from 'firebase/firestore'
import { createContext } from 'react'


export const FirestoreContext = createContext<null | Firestore>(null)