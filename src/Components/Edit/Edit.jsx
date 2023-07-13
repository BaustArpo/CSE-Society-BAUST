import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Edit = () => {
    const cofee = useLoaderData();
    const { _id,name, designation, category, details, photo }=cofee;

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        
        const designation = form.designation.value;
        
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const UpdatedCoffe = { name, designation, category, details, photo }

        console.log(UpdatedCoffe);

        // send data to the server
        fetch(`http://localhost:5000/cofee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(UpdatedCoffe)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
        })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Update {name}</h2>
        <form onSubmit={handleAddCoffee}>
            {/* form name and quantity row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Designation</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="designation" defaultValue={designation} placeholder="designation" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="details" placeholder="Details" defaultValue={details} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Photo url row */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Update Member"  className="btn btn-block" />

        </form>
    </div>
    );
};

export default Edit;