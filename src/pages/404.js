import React from "react"
import "./404.css"

export default function error() {
  return (
    <>
      <h1 className="h1">404</h1>

      <div className="frame">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="caps">
        <img src="http://ademilter.com/caps.png" alt="" />
      </div>
      <canvas id="canvas"></canvas>
    </>
  )
}
