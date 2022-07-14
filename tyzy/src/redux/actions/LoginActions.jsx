import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { facebook, google } from '../../firebase/Firebase';
import { TypesLogin } from '../types/Types';

// -----------------------------Login
export const ActionLoginAsync = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(ActionLoginSync(email, password))
            })
            .catch(err => console.log(err))
    }
}

export const ActionLoginSync = (email, password) => {
    return {
        type: TypesLogin.login,
        payload: {
            email, password
        }
    }
}

// ---------------------------------Logout
export const ActionLogoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth();
        signOut(auth)
            .then((user) => {
                dispatch(ActionLogoutSync())
            })
            .catch(err => console.log(err));
    }
}

export const ActionLogoutSync = () => {
    return {
        type: TypesLogin.logout
    }
}

// ----------------------------------register Email and Password
export const ActionRegisterAsync = (name, email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(ActionRegisterSync(name, email, password))
            })
            .catch(error => console.log(error))
    }
}

export const ActionRegisterSync = (name, email, password) => {
    return {
        type: TypesLogin.register,
        payload: {
            name, email, password
        }
    }
}

// ----------------------------------Login Google
export const ActionGoogleRegister = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(ActionRegisterSync(user.displayName, user.email))
            })
            .catch(error => console.log(error))
    }
}

// ----------------------------------Login facebook
export const ActionFacebookRegister = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, facebook)
            .then(({ user }) => {
                dispatch(ActionLoginSync(user.uid, user.displayName))
            })
            .catch(error => console.log(error));
    };
};