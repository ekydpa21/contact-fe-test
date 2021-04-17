import React from "react"
import { useDispatch } from "react-redux"
import { detailAction, removeDetail, revealAddForm, deleteAction } from "../store/actions/contactAction"
import Swal from "sweetalert2"

export default function ContactCard({ id, firstName, lastName, photo }) {
  const dispatch = useDispatch()

  const contactDetail = (e) => {
    e.preventDefault()
    dispatch(revealAddForm(false))
    dispatch(removeDetail(true))
    dispatch(detailAction(id))
  }

  const deleteContact = (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Do you want to delete this contact?",
      showCancelButton: true,
      confirmButtonText: `Save`,
      confirmButtonColor: "red",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteAction(id))
        Swal.fire("Deleted!", "", "success")
      } else if (result.isDenied) {
        Swal.fire("Contact is not Deleted", "", "info")
      }
    })
  }
  return (
    <div className="card shadow-sm">
      <img src={photo} className="card-img-top" alt="" />
      <div className="card-body" onClick={contactDetail}>
        <h5 className="card-title">
          {firstName} {lastName}
        </h5>
      </div>
      <button className="btn btn-outline-danger" onClick={deleteContact}>
        <i className="bi bi-trash"></i>
      </button>
    </div>
  )
}
