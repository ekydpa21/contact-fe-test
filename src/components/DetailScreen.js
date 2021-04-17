import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { removeDetail, editContact } from "../store/actions/contactAction"
import Swal from "sweetalert2"

export default function DetailScreen({ detail }) {
  const { id, firstName, lastName, age, photo } = detail
  const dispatch = useDispatch()
  const [inputData, setInputData] = useState({
    firstName: firstName,
    lastName: lastName,
    age: age,
    photo: photo,
  })

  const handleOnChange = (e) => {
    let { name, value } = e.target
    const newInput = { ...inputData, [name]: value }
    setInputData(newInput)
  }

  const closeDetail = () => {
    dispatch(removeDetail())
  }

  const saveContact = (e) => {
    e.preventDefault()
    const { firstName, lastName, age, photo } = inputData
    if (firstName !== "" && lastName !== "" && age !== "" && photo !== "") {
      dispatch(editContact(id, inputData))
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Contact has been updated",
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return (
    <div className="detail-container">
      <div className="detail-content">
        <div className="detail-header">
          <h5 className="form-title me-auto">Contact's Detail</h5>
          <button type="button" className="btn-close" onClick={closeDetail}></button>
        </div>
        <div className="detail-body">
          <img src={photo} alt="..." />
          <div className="personal-data shadow-sm">
            <span>
              Name : {firstName} {lastName}
            </span>
          </div>
          <div className="personal-data shadow-sm">
            <span>Age : {age} years old</span>
          </div>
        </div>
        <div className="detail-footer">
          {/* <!-- Button trigger modal --> */}
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Edit Contact
          </button>

          {/* <!-- Modal --> */}
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Edit Contact
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
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
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" onClick={saveContact} data-bs-dismiss="modal">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
