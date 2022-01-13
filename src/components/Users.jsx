// import React from "react";

// import { Link } from "react-router-dom";

// export const Users = () => {

    
//     return (
//         <div>
//             {[1,2,3,4].map((e, i) => ( 
//             <div key={i} style={{ margin: "10px" }}>
//                     <Link to={`/users/${e}`}>User {e}</Link>
//                 </div>
//                 ))}
//         </div>
//     )
// }
import {Link} from "react-router-dom"
import {useState} from "react"
import {useEffect} from "react"
// import {useParams} from "react-router-dom"

export const Users =  () =>{
    // const {userid} = useParams()
    const [data, setData] = useState([])

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products/category/electronics?limit=10")
        .then(d => d.json())
        .then((res)=>{
        // console.log('res:', res)
        setData(res)
        
        })
    },[])
    

    return <div>
     
   {data.map((e) =>  
   
<div>

<div>
<div className="display">
<img className="image" src={e.image} alt="text" />
<h2>{e.title}</h2>
<h3 className="p_price">Price:-{e.price}Rs.</h3> 
<Link className="know_more" to={`/users/${e.id}`}>Know More</Link>
</div>
</div>

</div>
   
   )}
    
    
         </div>
    
   
}