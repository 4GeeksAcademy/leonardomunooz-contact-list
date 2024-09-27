import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const initialContact = {
    "name": "",
    "phone": "",
    "email": "",
    "address": ""
}

const URL_BASE = "https://playground.4geeks.com/contact"

const AddContact = () => {

    const [contact, setContact] = useState(initialContact)
    const [agenda, setAgenda] = useState([])

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {


        e.preventDefault()
        if (contact.name === '' || contact.email === '' || contact.phone === '' || contact.address === '') {
            console.log('Algo ha ocurrido');

        } else {

            createContact()

        }

    }

    const createContact = async () => {
        try {
            const response = await fetch(`${URL_BASE}/agendas/leonardo-agenda/contacts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
            })

            if (response.ok) {
                console.log('se ha guardado el contacto');
                setAgenda([
                    ...agenda, contact
                ])

            } else {
                console.log('algo ha ocurrido');

            }
            setContact(initialContact)
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="container d-flex  flex-column justify-content-center " style={{ height: "100vh" }}>
            <h2 className='text-center fw-bolder '>Add a new contact</h2>
            <div className="row">
                <div className="col-12 col-md-7 border m-auto p-4 ">
                    <form
                        className="row g-3"
                        onClick={handleSubmit}
                    >
                        <div className="col-12">
                            <label for="inputNameTxt" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="inputNameTxt" placeholder='Enter Full Name' name='name' onChange={handleChange} value={contact.name} />
                        </div>
                        <div className="col-12">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder='Enter Email' name='email' onChange={handleChange} value={contact.email} />
                        </div>
                        <div className="col-12">
                            <label for="inputPhone" className="form-label">Phone</label>
                            <input type="phone" className="form-control" id="inputPhone" placeholder='Enter Phone' name='phone' onChange={handleChange} value={contact.phone} />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name='address' onChange={handleChange} value={contact.address} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary w-100"  >save</button>
                        </div>
                        <Link to="/">or get back to contacts</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact;