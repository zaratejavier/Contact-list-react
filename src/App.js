import React from 'react';
import './App.css';
import { Container, Header, Segment,Button,Icon } from 'semantic-ui-react'
import Contacts from "./Contacts"
import ContactForm from "./ContactForm"


class App extends React.Component{
  state = {
    contacts: [
      {id:1, name:"sally", phone: '800-911-9111'},
      {id:2, name:"bil", phone: '800-912-9131'},
      {id:3, name:"hank", phone: '800-915-9177'},
    ],
    showForm: true,
  }

  toggleForm =() => {
    this.setState({showForm: !this.state.showForm})
  }

  addContact = (contact) => {
    let newContact = {id: `${Math.random()}`, ...contact };
    this.setState({contacts: [newContact, ...this.state.contacts]})
  }

  deleteContact = (id) => {
    const contacts = this.state.contacts.filter(c => c.id !== id)
    this.setState({
      contacts: contacts,
    })
  }

  render(){
    const {showForm, contacts} = this.state
    return (
      <Container style={{paddingTop:"20px"}}>
        <Header as='h1'>React Conatact List</Header>
        <Segment>
          <Button icon color='blue' onClick={this.toggleForm}>
            <Icon name ={showForm ? "angle double up" : "angle double down"}/>
          </Button>
        {/* {this.state.showForm ?<ContactForm add={this.addContact}/> : null} */}
        {showForm && <ContactForm add={this.addContact}/>}

        </Segment>
        <Contacts del={this.deleteContact} contacts={contacts}/>
      </Container>
    )
  }
}


export default App;
