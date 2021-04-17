import React from "react"
import loading from "../Loading_icon.gif"

export default function LoadingDetail() {
  return (
    <div className="loadingDetail">
      <img src={loading} alt="Unloaded File" />
      <p>Loading . . .</p>
    </div>
  )
}
