import React from "react"
import blankProfile from "../blank-profile.png"

export default function EmptyDetail() {
  return (
    <div className="emptyDetail">
      <img src={blankProfile} alt="..." />
    </div>
  )
}
