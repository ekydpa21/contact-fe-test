import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addAction, revealAddForm } from "../store/actions/contactAction"
import Swal from "sweetalert2"

export default function FormAdd() {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    photo: "",
  })
  const dispatch = useDispatch()

  const handleOnChange = (e) => {
    let { name, value } = e.target
    const newInput = { ...inputData, [name]: value }
    setInputData(newInput)
  }

  const saveContact = (e) => {
    e.preventDefault()
    const { firstName, lastName, age, photo } = inputData
    if (firstName !== "" && lastName !== "" && age !== "" && photo !== "") {
      dispatch(addAction(inputData))
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "New contact has been saved",
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return (
    <div className="form-container">
      <div className="form-content">
        <div className="form-header">
          <h5 className="form-title me-auto">Add Contact</h5>
          <button type="button" className="btn-close" onClick={() => dispatch(revealAddForm(false))}></button>
        </div>
        <div className="form-body">
          <div className="form-floating mb-3">
            <input type="text" name="firstName" value={inputData.firstName} autoComplete="off" className="form-control" id="floatingFirstName" onChange={handleOnChange} />
            <label htmlFor="floatingFirstName">First Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" name="lastName" value={inputData.lastName} autoComplete="off" className="form-control" id="floatingLastName" onChange={handleOnChange} />
            <label htmlFor="floatingLastName">Last Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" name="age" value={inputData.age} autoComplete="off" className="form-control" id="floatingAge" onChange={handleOnChange} />
            <label htmlFor="floatingAge">Age</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" name="photo" value={inputData.photo} autoComplete="off" className="form-control" id="floatingPhoto" onChange={handleOnChange} />
            <label htmlFor="floatingPhoto">Photo</label>
          </div>
        </div>
        <div className="form-footer">
          <button type="button" className="btn btn-primary" onClick={saveContact}>
            Save Contact
          </button>
        </div>
      </div>
    </div>
  )
}
