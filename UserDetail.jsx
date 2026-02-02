import React, { useEffect, useState } from 'react'

function UserDetails(){
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUser(data))
    },[])
    return (
        <div>
            <h3>User Details</h3>
            <div>
                {user.map((Details)=>(
                    <div key={user.id}>
                       userName :  <p>{Details.Name}</p>
                        Email : <p>{Details.Email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default UserDetails