import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import Swal from 'sweetalert2';
const initialContactEdit = {
    "name": "",
    "phone": "",
    "email": "",
    "address": ""
}

const UpdateContact = () => {

    const { store, actions } = useContext(Context)
    const [contact, setContact] = useState({})

    const params = useParams()

    const findContact = () => {
        const contactEdit = store.contacts.find((element) => element.id == params.id)
        setContact(contactEdit)
    }

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {

        if (contact.name === '' || contact.email === '' || contact.phone === '' || contact.address === '') {
            Swal.fire({
                title: "Alguno de los campos estan vacios",
                text: "Verifique nuevamente",
                icon: "question"
            });

        } else {


            Swal.fire({
                title: "¿Desea editar el contacto?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Editar",
                denyButtonText: `No Editar`
            }).then((response) => {

                /* Read more about isConfirmed, isDenied below */
                if (response.isConfirmed) {
                    Swal.fire("Guardado!", "", "success");
                    actions.updateContact(contact, contact.id)
                    setContact(initialContactEdit)

                } else if (response.isDenied) {
                    Swal.fire("Los cambios no fueron realizado", "", "info");
                }
            });

        }

    }
    useEffect(() => {
        findContact()
    }, [store.contacts])


    return (
        // <h1>Update contact page {params.id}</h1>
        <div className="container d-flex  flex-column justify-content-center " style={{ height: "100vh" }}>
            <h2 className='text-center fw-bolder text-white '>Edit contact</h2>
            <div className="row">
                <div className="col-12 col-md-6  m-auto  rounded-3 p-4" style={{ backgroundColor: "#7569c6" }}>
                    <form
                        className="row g-3"
                        onClick={(e) => e.preventDefault()}
                    >
                        <div className="col-12">
                            <label htmlFor="inputNameTxt" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="inputNameTxt" placeholder='Enter Full Name' name='name' onChange={handleChange} value={contact?.name} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder='Enter Email' name='email' onChange={handleChange} value={contact?.email} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputPhone" className="form-label">Phone</label>
                            <input type="phone" className="form-control" id="inputPhone" placeholder='Enter Phone' name='phone' onChange={handleChange} value={contact?.phone} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name='address' onChange={handleChange} value={contact?.address} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-custom-save w-100" onClick={handleSubmit} >edit</button>
                        </div>
                        <Link to="/" style={{ color: "#e6e0ec" }}>or get back to contacts</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default UpdateContact;