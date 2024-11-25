"use client"

import AddAddressBtn from "./AddAddressBtn"
import EditAddressBtn from "./EditAddressBtn"

function AddressList() {

    const address = [
        {
          "name": "Home",
          "address": "123 Main Street, Springfield, IL",
          "onClick": "handleHomeClick"
        },
        {
          "name": "Work",
          "address": "456 Elm Street, Chicago, IL",
          "onClick": "handleWorkClick"
        },
        {
          "name": "Gym",
          "address": "789 Oak Avenue, Naperville, IL",
          "onClick": "handleGymClick"
        },
        {
          "name": "Parents' House",
          "address": "101 Pine Street, Bloomington, IL",
          "onClick": "handleParentsClick"
        },
        {
          "name": "Favorite Cafe",
          "address": "202 Maple Drive, Champaign, IL",
          "onClick": "handleCafeClick"
        }
      ]
      
    return (
        <div className="flex flex-wrap justify-center items-center gap-4" >
            <AddAddressBtn onClick={()=>{}} />
            {
                address.map(address=> <EditAddressBtn name={address.name} address={address.address} onClick={()=>{}} />)
            }
        </div>
    )
}

export default AddressList