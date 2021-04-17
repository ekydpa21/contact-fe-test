import React from "react"
import { useDispatch } from "react-redux"
import ContactCard from "../components/ContactCard"
import { removeDetail, revealAddForm } from "../store/actions/contactAction"

export default function ContactList({ contacts }) {
  const dispatch = useDispatch()

  const showForm = (e) => {
    e.preventDefault()
    dispatch(revealAddForm(true))
    dispatch(removeDetail())
  }

  return (
    <div className="contactList">
      <div className="listContainer">
        {contacts &&
          contacts.map((contact) => {
            const { id, firstName, lastName, photo, age } = contact
            return <ContactCard key={id} id={id} firstName={firstName} lastName={lastName} age={age} photo={photo} />
          })}
        <ContactCard />
      </div>
      <button type="button" className="btn btn-primary" onClick={showForm}>
        Add Contact
      </button>
    </div>
  )
}
