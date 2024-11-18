import React from 'react'
import { signOut } from 'aws-amplify/auth';

import { SignoutButton } from './Signout.styles'

export default function Signout() {
    const signOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.log("signing out error: ", error);
        }
    }

    return (
        <SignoutButton onlick={signOut}>Sign out</SignoutButton>
    )
}
