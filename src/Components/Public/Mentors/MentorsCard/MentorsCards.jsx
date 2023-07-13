import React from 'react';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MentorsCards = ({mentor}) => {
    const {_id,name, designation, category, details, photo}= mentor;

    const handleDelete = _id=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //  
                fetch(`http://localhost:5000/cofee/${_id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount>0){
                        Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                    }
                })
            }
          })
    }




    return (
        <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{designation}</p>
        
        
        <p><small>{category}   {details}</small></p>
        <div className="card-actions justify-end ">
          <button className="btn btn-primary">Details</button>
          <Link to={`/updateCofee/${_id}`}>
          <button className="btn btn-primary">Edit</button>
          </Link>
          <button onClick={()=>handleDelete(_id)} className="btn btn-primary">
          delete
          </button>
        </div>
      </div>
    </div>
    );
};

export default MentorsCards;