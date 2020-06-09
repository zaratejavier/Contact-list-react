import React from "react"
import {Form} from "semantic-ui-react"

export default class ContactForm extends React.Component{
  state = {
    name:'',
    phone:'',
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state) //as the new contact
    //We want to add new contact to state, where do we do that?
    //need to add this to app state
    this.props.add(this.state)
    this.setState({
      name:"",
      phone:""
    })
  }

  handleChange = (e) =>{
    console.log(e.target)
    console.log(e.target.value)
    console.log(e.target.name)

    this.setState({
      [e.target.name]: e.target.value
    })

  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>

        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label="Name"
            placeHolder ="Enter name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

           <Form.Input
            fluid
            label="Phone"
            placeHolder ="Enter Phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>

      </Form>
    )
  }

}