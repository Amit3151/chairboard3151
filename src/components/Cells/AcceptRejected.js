import { useState } from "react"
import cross from "../../images/close.png";
import tick from "../../images/tick.png";

export default function AcceptRejected() {
  const [action, setAction] = useState({
    accepted: null,
    rejected: null
  })

  // Filter Patch

  const handleFilterSubmit = () => {
  }
  return (

    <td>
      {action.accepted === null && action.rejected === null ?
        <span className="btn_sty_tick">
          <button className="green_btn" onClick={() => {
            setAction((prev) => ({ ...prev, accepted: true }))
          }}>
            <img src={tick} alt="" />
          </button>
          <button className="red_btn" onClick={() => {
            setAction((prev) => ({ ...prev, rejected: true }))
          }}>
            <img src={cross} alt="" />
          </button>
        </span> : action?.accepted ? <span className="accepted_styling">Accepted</span> : <span className="Rejected_styling">Rejected</span>
      }
    </td>
  )
}