import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext.js'
import ContactCard from '../component/ContactCard.jsx'


const Contact = () => {
    const { store } = useContext(Context)
    // console.log(store.todos);
    return (
        <div className="container ">
            <div className="d-flex justify-content-end  py-4" >
                <Link to="/addcontact" className=''>
                    <button className='btn btn-success'>Add new contact</button>
                </Link>
            </div>
            <ul className="list-group col-12">

                {
                    store.contacts.map((contact) => {
                        return (
                            <ContactCard
                                key={contact.id}
                                contact={contact}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default Contact;