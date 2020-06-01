import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="notFound">
            <h1>404 Not Found</h1>
            <p>The page you are looking for is not Found.</p>
            <Link to="/" className="back">Back to home</Link>
        </div>
    )
}
