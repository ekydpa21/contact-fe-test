import React from "react"
import loading from "../Loading_icon.gif"

export default function LoadingScreen() {
  return (
    <div className="loadingScreen">
      <img src={loading} alt="Unloaded File" />
      <p>Loading . . .</p>
    </div>
  )
}
