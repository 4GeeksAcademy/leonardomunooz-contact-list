import React from 'react'
import ContactCard from '../component/ContactCard.jsx'
import { Link } from 'react-router-dom'


const Contact = () => {
    return (
        <div className="container ">
            <div className="d-flex justify-content-end  py-4" >
                <Link to="/addcontact" className=''>
                    <button className='btn btn-success'>Add new contact</button>
                </Link>
            </div>
            <ul class="list-group col-12">
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
            </ul>
        </div>
    )
}


export default Contact;