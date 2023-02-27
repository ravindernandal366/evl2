import React from 'react'

export default function Navbar() {

    return (
        <div>
            <div> Go To Dashboard! </div>
            <input 
                type = "text" 
                placeholder = "Search by category" 
                className = "search_box"
            />
        </div>
    )
}
