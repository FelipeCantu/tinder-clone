import React, { createContext, useContext } from 'react'
import * as Google from 'expo-google-app-auth'


const AuthContext = createContext({})

const config = {
    androidClientId: '604484189186-vfgcfmpnt41q4a883roq5rinppao30nl.apps.googleusercontent.com',
    iosClientId: '604484189186-l4ifari43mordsf0un8oavmo6dclljgd.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    permissions: ['public_profile', 'email', 'gender', 'location'],
}

export const AuthProvider = ({ childern }) => {
    const signInWithGoogle = async () => {
        Google.logInAsync(config).then(async (logInResult) => {
            if (logInResult.type === "success") {
                //login...
            }
        })
    }
    return (
        <AuthContext.Provider
            value={{
                user: null,
                signInWithGoogle,
            }}
        >
            {childern}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}