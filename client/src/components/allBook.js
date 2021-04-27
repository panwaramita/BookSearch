//import react
import React, { useState } from 'react';
//import the API
import API from "../utils/API";
//function to get all the book searched by the user
const AllBook = ({ data }) => {
  //save the book state
  const [save, setSave] = useState();
  //function to sav the book in to the database
  const handleBookSave = () => {
    //create a book object to save the book with title,author,description and image
    const Book = {
      title: data.title,
      author: data.authors[0],
      description: data.description,
      imageurl: data.image,
      link: data.link
    }
    //check if the book is saved or not
    const check = API.saveBook(Book);
    //if book is saved display a message book saved
    if (check) {
      setSave("Saved")
    }
  }
  return (
    //create a search box for searching the google books
    <div className="container">
      <div className="container" style={{ border: "0.3px solid black", marginTop: "10px", marginBottom: "10px", backgroundColor: "#ffe6e6" }}>
        <div className="row">
          <div className="col-lg-12">
            <label id="alert" style={{ display: "block", textAlign: "center", fontSize: "30px", backgroundColor: "lightgreen", color: "red" }}>{save}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
          </div>
        </div>
        <div className="row">
          <div className="col-lg-11">
            <label style={{ fontSize: "40px", fontWeight: 'bold' }}>{data.title}</label>
          </div>
          <div className="col-lg-1">
            <button className="btn btn success" data-toggle="modal" data-target="#exampleModal" onClick={handleBookSave} style={{ backgroundColor: "rgb(255, 128, 170)", marginTop: "13px" }}><i className="fa fa-upload"></i></button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <img src={data.image} />
          </div>
          <div className="col-lg-10">
            <div className="card" style={{ marginBottom: "10px" }}>
              <div className="card-body">
                <h4 className="card-title"><span style={{ fontWeight: "bold" }}>Author:</span> {data.authors}</h4>
                <p className="card-text">{data.description}</p>
                <a href={data.link} target="_blank">Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//export the AllBook
export default AllBook;