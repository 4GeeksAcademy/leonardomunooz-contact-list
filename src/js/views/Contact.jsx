import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext.js'
import PropTypes from 'prop-types'

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
                    store.todos.map((contact) => {
                        return (
                            <ContactCard
                                key={contact.id}
                                name={contact.name}
                                email={contact.email}
                                phone={contact.phone}
                                address={contact.address}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default Contact;