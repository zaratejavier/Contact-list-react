import React from "react"
import {Table, TableHeaderCell} from "semantic-ui-react"
import Contact from "./Contact"

const Contacts = ({contacts, del}) => (
  <Table celled padded> 
    <Table.Header>
      <Table.Row>
        <TableHeaderCell>First Name</TableHeaderCell>
        <TableHeaderCell>Phone</TableHeaderCell>
        <TableHeaderCell>Options</TableHeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        contacts.map( contact => (
          // <Contact key={conatact.id} name ={contact.name} phone={contact.phone}/>
          <Contact remove={del} key={contact.id} {...contact}/> // same as top just cleaner
        ))
      }
    </Table.Body>
  </Table>
)

export default Contacts