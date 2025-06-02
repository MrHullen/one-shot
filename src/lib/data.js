import { initializeApp } from 'firebase/app'
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { user, character } from '$lib/state.svelte.js'

const firebaseConfig = {
  apiKey: 'AIzaSyC9vbal_acmX4YkVhF2DNgvATAn5hSvEfE',
  authDomain: 'corpse-cart.firebaseapp.com',
  projectId: 'corpse-cart',
  storageBucket: 'corpse-cart.firebasestorage.app',
  messagingSenderId: '931567578818',
  appId: '1:931567578818:web:852a7c83fee508e9bbd55b',
  measurementId: 'G-F7FNYNCNJW',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

// Saves a character object to the database.
export async function setCharacter() {
  const characterDoc = await setDoc(doc(db, 'characters', user.uid), character)
}

// Gets the logged in person's character from the database.
export async function getCharacter(uid) {
  console.log('Fetching character for user:', uid)
  const characterRef = doc(db, 'characters', uid)
  const characterSnap = await getDoc(characterRef)

  if (characterSnap.exists()) {
    const characterData = characterSnap.data()

    character.name = characterData.name
    character.profession = characterData.profession
    character.gearList = characterData.gearList
    character.spellList = characterData.spellList
    character.potionList = characterData.potionList
    character.skills = characterData.skills
    character.stats = characterData.stats
  } else {
    alert('No saved characters!')
  }
}

// Signs in a user with Google authentication.
export async function login() {
  const result = await signInWithPopup(auth, provider)

  user.uid = result.user.uid
  user.email = result.user.email
  user.displayName = result.user.displayName
  user.photoURL = result.user.photoURL

  let data = JSON.stringify(user)
  console.log('User data:', data)
  localStorage.setItem('user', data)
}

// Signs out the current user.
export async function logout() {
  user.uid = null
  user.email = null
  user.displayName = null
  user.photoURL = null

  await signOut(auth)
}
