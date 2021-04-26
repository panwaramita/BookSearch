
import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import Book from "./savedBooks";
const SaveBook=()=>{
    const [saveBooks,setSaveBooks]=useState([]);
    const [data,setData]=useState(false);
    useEffect(async()=>{
       await API.getBooks()
       .then((data)=>{
      let  results = data.data
      if(!results.length) document.getElementById("check").style.display="block";
    console.log(results)
setSaveBooks(results)
        })
        
    },[]);
    return(
        <div className="container" style={{marginTop:"80px"}}>
    {(saveBooks.map((ele)=>(<Book data={ele}/>)))}
    <h1 id="check" style={{display:"none",textAlign:'center'}}>No Records</h1>
        </div>
    )
}
export default SaveBook;