import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="container mt-5">
        <div className="row">
            <div className="d-flex justify-content-center align-items-center flex-column home">
                <h4 className="display-2">404 !!</h4>
                <Link to="/">
                    <h4>Click here to go to Home Page</h4>
                </Link>
            </div>
        </div>
    </div>
    )
}
