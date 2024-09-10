import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig'; // Import the Firebase database


// Signup funktion
export const signup = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  
};

// Login funktion (hvis du vil bruge den)
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error during signup:", error.message); // Log the error
    throw new Error("Signup failed, please try again.");  // Throw a custom error
    // not enough to simply throw error, you need to add value to the error message

  }
};
