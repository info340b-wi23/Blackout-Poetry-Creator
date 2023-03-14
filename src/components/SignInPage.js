import React from "react";

import {getAuth, EmailAuthProvider, GoogleAuthProvider} from 'firebase/auth'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseUIConfig = {
    signInOptions: [ // Array of sign in options supported
      // Array can include just "Provider IDs", or objects with the IDs and options
      GoogleAuthProvider.PROVIDER_ID,
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    ],
    signInFlow: 'popup', //don't redirect to authenticate
    credentialHelper: 'none', //don't show the email account chooser
    callbacks: { //"lifecycle" callbacks
        signInSuccessWithAuthResult: () => {
            window.location = "/explore"; // https://stackoverflow.com/questions/38965060/how-do-i-redirect-the-user-after-a-successful-login-on-firebase#:~:text=To%20handle%20login%20and%20logout%2C%20always%20use%20onAuthStateChanged,can%20use%20it%20to%20redirect%20to%20another%20page.
            return false; //don't redirect after authentication
        }
    }
}

export function SignInPage() {
    const auth = getAuth();
 
    return (
        <main>
            <div className="sign-in-flexbox">
                <div className="sign-in-box">
                    <h1>Blackout Poetry</h1>
                    <p>Welcome to Blackout Poetry! Sign in to get started</p>
                    <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
                </div>
            </div>
        </main>
    )
}