import React from 'react'

export default function Search() {
    return (
        <div className="d-flex justify-content-center">
            <form className="d-flex">
                <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            
        </div>
    )
}
