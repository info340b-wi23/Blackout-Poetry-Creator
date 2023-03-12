import React from "react";

import {getAuth, EmailAuthProvider} from 'firebase/auth'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseUIConfig = {
    signInOptions: [ //array of sign in options supported
      //array can include just "Provider IDs", or objects with the IDs and options
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    ],
    signInFlow: 'popup', //don't redirect to authenticate
    credentialHelper: 'none', //don't show the email account chooser
    callbacks: { //"lifecycle" callbacks
      signInSuccessWithAuthResult: () => {
        return false; //don't redirect after authentication
        }
    }
}

export function SignInPage(props) {
    const auth = getAuth();
 
    return (
        <div>
            <h1>Blackout Poetry</h1>
            <p>Welcome to Blackout Poetry! Sign in to get started</p>
            <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
        </div>
    )
}