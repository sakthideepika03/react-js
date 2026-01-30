import React, { useEffect } from 'react'

function Greeting(){
    const [greetings,setGreeting]=useState("");
    useEffect(()=>{
        let hours=new Date().getHours().toString().padStart(2,"0")
        let minutes=new Date().getHours().toString().padStart(2,"0")
        let seconds=new Date().getHours().toString().padStart(2,"0")
        if(hours<12){
            setGreeting(`Good Morning ${hours}:${minutes}:${seconds}`)
        }
        else if(hours>=12 && hours<=15){
            setGreeting(`Good Afternoon ${hours}:${minutes}:${seconds}`) 
        }
        else if(hours>=17 && hours<=18){
            setGreeting(`Good Evening ${hours}:${minutes}:${seconds}`) 
        }
        else{
            setGreeting('Good night')
        }
    })
    return(
        <div>
            <div style={{
            height:"100px",
            width:"200px",
            backgroundColor:"blue",
            marginTop:"40px",
            marginLeft:"300px",
            borderTopLeftRadius:"20px",
            borderBottonRightRadius:"20px"}}></div>

        </div>
    )
}

export default Greeting
