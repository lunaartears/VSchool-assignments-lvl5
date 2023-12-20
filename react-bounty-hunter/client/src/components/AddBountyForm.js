import React, {useState} from "react"

export default function AddBountyForm(props) {
    const initInputs = {
        name: props.name || "",
        living: true,
        bounty: props.bounty || "",
        type: props.type || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        //console.log(inputs)
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-container">
            <input className="form-ele" type="text" name="name" value={inputs.name} onChange={handleChange} placeholder="Name"></input>
            <input className="form-ele" type="text" name="living" value={inputs.living} onChange={handleChange} placeholder="Living?"></input>
            <input className="form-ele" type="text" name="bounty" value={inputs.bounty} onChange={handleChange} placeholder="Bounty"></input>
            <input className="form-ele" type="text" name="type" value={inputs.type} onChange={handleChange} placeholder="Type"></input>
            </div>

            <div><button className="submit-button">{props.buttonText}</button></div>
        </form>
    )
}
