//import the react ,useEffect and useState
import React, { useEffect, useState } from 'react';
//get the API
import API from '../utils/API';
//get the Book  component
import Book from "./savedBooks";
//create the SaveBook function 
const SaveBook = () => {
    //create a state to check weather the book is saved or not
    const [saveBooks, setSaveBooks] = useState([]);
    const [data, setData] = useState(false);
    //call the useEffect after the page render and get the books saved in the database
    useEffect(async () => {
        //API to get the book from the database
        await API.getBooks()
            .then((data) => {
                let results = data.data
                //check if records are there in the database or not
                //if no records display "No Records"
                if (!results.length) document.getElementById("check").style.display = "block";
                //save the result in the saveBook state
                setSaveBooks(results)
            })
    }, []);
    return (
        //create a container for the books from the database
        <div className="container" style={{ marginTop: "80px" }}>
            {(saveBooks.map((ele) => (<Book data={ele} />)))}
            //display if not records in the database
            <h1 id="check" style={{ display: "none", textAlign: 'center' }}>No Records</h1>
        </div>
    )
}
//export the SaveBook
export default SaveBook;