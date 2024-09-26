import React from 'react'
import { Link } from 'react-router-dom';

const AddContact = () => {
    return (
        <div className="container d-flex  flex-column justify-content-center " style={{ height: "100vh" }}>
            <h2 className='text-center fw-bolder '>Add a new contact</h2>
            <div className="row">
                <div className="col-12 col-md-7 border m-auto p-4 ">
                    <form class="row g-3">
                        <div class="col-12">
                            <label for="inputNameTxt" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="inputNameTxt" placeholder='Enter Full Name' />
                        </div>
                        <div class="col-12">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email' />
                        </div>
                        <div class="col-12">
                            <label for="inputPhone" class="form-label">Phone</label>
                            <input type="phone" class="form-control" id="inputPhone" placeholder='Enter Phone' />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary w-100">save</button>
                        </div>
                        <Link to="/">or get back to contacts</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact;