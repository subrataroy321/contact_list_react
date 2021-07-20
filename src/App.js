import React, { useState } from "react";
import './App.css'
import styled from 'styled-components'

import ContactList from "./components/ContactList";
import AddOrUpdateContact from "./components/AddOrUpdateContact";

function App() {
  const [contactToBeViewed, setContactToBeViewed] = useState()
  const [isSelected, setIsSeleted] = useState(false)


  var contactsArray = [
    {
      id: 1,
      fname: "Subrata",
      lname: "Roy",
      emails: ["subrata.roy@gmail.com", "subrata@yahoo.com"],
      phone_numbers: ["6781234567", "4045676789"]
    },
    {
      id: 2,
      fname: "Sajal",
      lname: "Roy",
      emails: ["sajal.roy@gmail.com", "sajal@yahoo.com"],
      phone_numbers: ["6781234567", "4045676789"]
    },
    {
      id: 3,
      fname: "Shipra",
      lname: "Roy",
      emails: ["shipra.roy@gmail.com", "shipra@yahoo.com"],
      phone_numbers: ["6781234567", "4045676789"]
    },
  ]

  const selectContact = (contact_id) => {
    setContactToBeViewed(contact_id);
    setIsSeleted(true);
  }
  
  return (
    <MainContainer>
        <Body>
            <ContactList contactsArray={contactsArray} selectContact={selectContact} isSelected={isSelected} contactToBeViewed={contactToBeViewed}/>
            <AddOrUpdateContact contactsArray={contactsArray} contactToBeViewed={contactToBeViewed}/>
        </Body>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  
`
const Body = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100vh;
`

