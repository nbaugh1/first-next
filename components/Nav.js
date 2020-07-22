import React from 'react'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

export const Nav = ({ className }) => {
    return (
        <div className={className}>
            <ul>
                <li>Home</li>
                <li>Resume</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
                <li>GitHub</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
            </ul>
        </div>
    )
}
