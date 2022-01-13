// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// export const UserDetails = () => {

//     const { userid } = useParams();

//     const [user, setUser] = useState({});

//     useEffect(() => {
//         fetch(`https://reqres.in/api/users/${userid}`).then(d => d.json()).then(d => {

//             setUser(d.data)
//         })
//     },[userid])

//     return (
//         <div>
//         <div>
//             <img src={user.avatar} alt="profile" />
//         </div>
//         <div>
//             {user.first_name} {user.last_name}
//         </div>
//         <div>
//             Contact: {user.email}
//             </div>
//             </div>
//     )
// }


  
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


export const UserDetails = () =>{

  const {userid} = useParams()
//   console.log('userid:', userid)
  const [cart, setCart] = useState([])
  

  useEffect(() =>{
    fetch(`https://fakestoreapi.com/products/${userid}`)
    .then(d => d.json())
    .then((res)=>{
    // console.log('res:', res)
    setCart(res)
    
    })
},[userid])

console.log('cart:', cart)

    
    // console.log('userid:', userid)
    return <div>
       <div>
       <img className="imgSize" src={cart.image} alt="test" />
       <h2 className="p_name">{cart.title}</h2>
       <h3>Category:-{cart.category}</h3>
       <h3>Price:-{cart.price}Rs.</h3>
       <p className="dis">{cart.description}</p>
       </div>
    </div>
}