import React, { Component } from 'react'
import Title from '../Component/Title'

export class Home extends Component {
    constructor(){
        super();
        this.state={
            title:"This is title",
            description:"This is description"
        }
    }
  render() {
    return (
      <div>
        <h1>This is Home page</h1>
        <Title title={this.state.title} description={this.state.description}/>
      </div>
    )
  }
}

export default Home