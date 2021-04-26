import React, { useState } from 'react';
import API from "../utils/API";
const AllBook=({data})=>{
    const [save,setSave]=useState();
    const handleBookSave=()=>{
        const Book={
            title:data.title,
            author:data.authors[0],
            description:data.description,
            imageurl:data.image,
            link:data.link
        }
        console.log(Book);
         const check=API.saveBook(Book);
         if(check)
         {
             setSave("Saved")
             

         }
    }
    return(         
        <div className="container"> 
        <div className="container" style={{border:"1px solid black",marginTop:"10px",marginBottom:"10px",backgroundColor:"#ffe6e6"}}>      
        <div className="row"> 
           <div className="col-lg-12">
           <label id="alert"  style={{display:"block",textAlign:"center",fontSize:"40px",backgroundColor:"lightgreen",color:"red"}}>{save}</label>
           </div>
           </div>
             <div className="row"> 
           <div className="col-lg-12">
           </div>
           </div>
            <div className="row">
                <div className="col-lg-11">
                    <label style={{fontSize:"40px",fontWeight:'bold'}}>{data.title}</label>
                    </div>
                    <div className="col-lg-1">
                    <button className="btn btn success" data-toggle="modal" data-target="#exampleModal" onClick={handleBookSave} style={{backgroundColor:"green",marginTop:"13px"}}><i className="fa fa-upload"></i></button>
                    </div>	
            </div>
            <div className="row">
                <div className="col-lg-2">
                    <img src={data.image}/>
                    </div>
                    <div className="col-lg-10">  
                    <div className="card" style={{marginBottom:"10px"}}>
    <div className="card-body">
      <h4 className="card-title">Author: {data.authors}</h4>
      <p className="card-text">Description: {data.description}</p>
      <a href={data.link} target="_blank">Link</a>
    </div>
                </div>
                </div>

            </div>
 
        </div>
        <div>
                       <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
}

export default AllBook;