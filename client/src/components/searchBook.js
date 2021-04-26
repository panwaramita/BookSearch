import React, { useEffect, useState } from 'react';
import Image from "../images/kidWithBook.jpg"
import axios from "axios";
import Book from "./allBook";
const SearchBook=()=>{
    const [book,setBook]=useState();
    const [allBook,setAllBook]=useState([]);
    let results=[];


    const handlBookSearch=async()=>{
        const url="https://www.googleapis.com/books/v1/volumes?api_key=AIzaSyC_kBKxX1bOeYZ9z3Itd5x86QwbLL-uS_8&q="+book;
         await axios.get(url)
                .then((data)=>{
                     results = data.data.items
          results = results.map(result => {
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              authors: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink
            }
            return result;
          })
          setAllBook(results)
          
          console.log(allBook);
                })
         

    }
    return(
        <div>
        
        <div className="container-fluid" style={{marginTop:"70px"}}>
            <div className="row">
            <div className="col-lg-12">
                <img src={Image} />
            </div>
            </div>
            </div>
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-2"style={{width:"40px"}} > </div>
        <div className="col-lg-6" >
        <input type="text" value={book} onChange={(e)=>{setBook(e.target.value)}} className="form-control" style={{float:"right"}}/>
        </div>
        <div className="col-lg-3">
        <button className="btn btn-success" type="submit" onClick={handlBookSearch}>Search</button>
        </div>
        {(allBook.map((ele)=>(<Book data={ele}/>)))}
        </div>
    </div>
    </div>
    );
}

export default SearchBook;