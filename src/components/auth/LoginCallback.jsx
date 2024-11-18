import React from 'react'

export default function LoginCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    console.log("OAuth 授权码: ", code)

    return (
        <div>
            login success {code}
        </div>
    )
}
