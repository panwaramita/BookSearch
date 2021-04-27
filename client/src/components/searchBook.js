//import the React,useEffect,useState
import React, { useEffect, useState } from 'react';
//get the Image for the main page
import Image from "../images/kidWithBook.jpg";
//get the axios
import axios from "axios";
//get the Book component
import Book from "./allBook";
// create a SearchBook function
const SearchBook = () => {
    //create a book state
    const [book, setBook] = useState();
    //create a state for allBook
    const [allBook, setAllBook] = useState([]);
    //create an empty array to save the results
    let results = [];
    //create a function to search the book from google API
    const handlBookSearch = async () => {
        const url = "https://www.googleapis.com/books/v1/volumes?api_key=AIzaSyC_kBKxX1bOeYZ9z3Itd5x86QwbLL-uS_8&q=" + book;
        //call the axios get method to get the books 
        await axios.get(url)
            .then((data) => {
                //check if there are books if no thenn display "No records"
                if (data.data.totalItems === 0) {
                    document.getElementById("records").style.display = "block";
                    document.getElementById("record").style.display = "none";
                }
                else {
                    //if there are books display the books
                    document.getElementById("records").style.display = "none";
                    document.getElementById("record").style.display = "block";
                    results = data.data.items
                    //hold the book info in the results
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
                    //change the state to hold the results    
                    setAllBook(results)
                }
            })
    }
    return (
        //create a div to search for the book
        <div>
            <div className="container-fluid" style={{ marginTop: "70px" }}>
                <div className="row">
                    <div className="col-lg-12" style={{ textAlign: "center" }}>
                        <img src={Image} />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3" style={{ width: "40px" }} > </div>
                    <div className="col-lg-6" >
                        <input type="text" value={book} onChange={(e) => { setBook(e.target.value) }} className="form-control" style={{ float: "right" }} />
                    </div>
                    <div className="col-lg-3">
                        <button className="btn btn-success" type="submit" onClick={handlBookSearch}>Search</button>
                    </div>
                    {/* create a div to call Book component to hold the details */}
                    <div id="record" className="container">       
                     {(allBook.map((ele) => (<Book data={ele} />)))} </div>
                </div>
            </div>
            <div id="records" style={{ display: "none" }}>No Records</div>
        </div>
    );
}

export default SearchBook;