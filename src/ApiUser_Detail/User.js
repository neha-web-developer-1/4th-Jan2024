import React, { Component } from 'react'

export default class User2 extends Component {
    constructor(props){
    super(props)

    this.state = {
        image:props.image,
        name:props.name
    }
}
  render() {
    return (
      <div>
              <div className="card">
  <img className="card-img-top w-100" src={this.state.image} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title ">{this.state.name}</h4>
  </div>
</div>
      </div>
    )
  }
}
