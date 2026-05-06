import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDYCWCBVVsp0zkRMqukAJI4pZXJElEn34Y',
  authDomain: 'vue-firebase-template-24856.firebaseapp.com',
  projectId: 'vue-firebase-template-24856',
  storageBucket: 'vue-firebase-template-24856.firebasestorage.app',
  messagingSenderId: '246919884058',
  appId: '1:246919884058:web:da4ee96ac1b1e35818d0a3',
  measurementId: 'G-W8TSYCGZZ5',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()

/** Analytics requires a browser environment. */
export const analytics =
  typeof window !== 'undefined' ? getAnalytics(app) : null

const ACCOUNTS = 'accounts'

/**
 * Creates `accounts/{uid}` with `uid` and `roles` only if the document is missing.
 */
export async function ensureUserAccount(user) {
  if (!user?.uid) return

  const ref = doc(db, ACCOUNTS, user.uid)
  const snap = await getDoc(ref)
  if (snap.exists()) return

  await setDoc(ref, {
    uid: user.uid,
    roles: [],
  })
}
