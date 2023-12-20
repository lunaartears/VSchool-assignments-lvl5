import React, {useState} from "react"
import AddBountyForm from "./AddBountyForm.js"

export default function Bounty(props) {
    //console.log(props)
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="bounties">
            { !editToggle ?
            <>
            <h1>Name: {props.name}</h1>
            <p>Living: {props.living ? "Yes": "No"}</p>
            <p>Bounty: {props.bounty}</p>
            <p>Type: {props.type}</p>
            <button className="delete-button" onClick={() => props.deleteBounty(props._id)}>Delete Bounty</button>
            <button className="edit-button" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit Bounty</button>
            </>
            :
            <>
            <AddBountyForm
                name={props.name}
                living={props.living}
                bounty={props.bounty}
                type={props.type}
                _id={props._id}
                buttonText="Submit Edit"
                submit={props.editBounty}
            />
            <button className="edit-button" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close Edit</button>
            </>
            }
        </div>
    )
}
