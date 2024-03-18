import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async(email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
}

export const doSignInWithEmailAndPassword = async(email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}

// export const doSendEmailVerification = () => {
//     return sendEmailVerification(auth.currentUser,{
//         url: `${window.location.origin}/home`,
//     })
// }

// export const doPasswordChange = (password) => {
//     return updatePassword(auth.currentUser,password)
// }

// export const doPasswordReset = (email) =>{
//     return sendPasswordResetEmail(auth.currentUser,password)
// }

export const doSignOut = ()=>{
    return auth.signOut()
}