import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className='card'>
                <img src={props.img || 'https://images.unsplash.com/photo-1786813717492-b79ec9602556?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="cool" />
                <h1>{props.name},{props.age}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, exercitationem?</p>
                <button>View Profile</button>
            </div>
        </div>
    )
}

export default Card