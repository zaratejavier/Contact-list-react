import React from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react'
import Contacts from "./Contacts"

class App extends React.Component{
  state = {
    contacts: [
      {id:1, name:"sally", phone: '800-911-9111'},
      {id:2, name:"bil", phone: '800-912-9131'},
      {id:3, name:"hank", phone: '800-915-9177'},

    ]
  }
  render(){
    return(
      <Container>
        <Header as='h1'>React Conatact List</Header>
        <Contacts contacts={this.state.contacts}/>

      </Container>
    )
  }
}


export default App;
