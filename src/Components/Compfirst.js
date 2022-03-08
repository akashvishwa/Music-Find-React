import React,{useState , useEffect} from 'react'

export default function Compfirst(props) {
  const [username,setName]=useState("");

  // useEffect(()=>{
  //   console.log(username);
  // },[username]);
    
  return (
    <div>
      <form>
        {/* <input type="text" name="Username" onChange={(e)=>{setName(e.target.value)}} /> */}
        {/* <input type="text" name="Password" /> */}

      </form>


    </div>
    
  )
}
