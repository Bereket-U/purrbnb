import React from 'react'

export default function Search() {
    return (
        <div class="d-flex justify-content-center">
            <form class="d-flex">
                <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            
        </div>
    )
}
