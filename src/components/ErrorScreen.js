import React from "react"
import error from "../something-went-wrong.gif"

export default function ErrorScreen() {
  return (
    <div className="errorScreen">
      <img src={error} alt="Unloaded File" />
    </div>
  )
}
