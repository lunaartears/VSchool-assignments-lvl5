import React, { useState, useEffect } from "react"
import axios from "axios"
import Bounty from "./components/Bounty.js"
import AddBountyForm from "./components/AddBountyForm.js"
import './App.css';

function App() {

  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get("./bounties")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  function addBounty(newBounty) {
    axios.post("/bounties", newBounty)
      .then(res =>setBounties(prevBounties => [...prevBounties, res.data]))
      .catch(err => console.log(err))
  }

  function deleteBounty(bountyId) {
    axios.delete(`/bounties/${bountyId}`)
      .then(res => setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId)))
      .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId) {
    axios.put(`/bounties/${bountyId}`, updates)
      .then(res => setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data)))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [])

  return (
    <div>
    <h1 className="title">Bounty Hunter</h1>
      <div>
        <AddBountyForm
        submit={addBounty}
        buttonText="Add Bounty"
        //editBounty={editBounty}
        />

        {bounties.map(bounty => <Bounty {...bounty}
        key={bounty.name}
        deleteBounty={deleteBounty}
        editBounty={editBounty}
        />)}
      </div>
    </div>
  )
}

export default App;
