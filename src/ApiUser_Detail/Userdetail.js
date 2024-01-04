import React, { Component } from 'react'

export default class Userdetail extends Component {
  //useparam

  constructor(props){
  super(props)

  this.state={
    id:window.location.href.split('/')[4],
    data:null
  }
}

componentDidMount(){
  // fetch api ,fetch data ,display
  fetch('https://dummyjson.com/users/'+this.state.id)
  .then(response=>response.json())
  .then(data=>this.setState({data:data}))
}
  render() {console.log(this.state.data);

   // console.log(this.state.params);
    return (
      <div><h2 className='text-warning'>Userdetail</h2>
        <div className='row w-100 mt-4'>
          {(this.state.data!=null)?
          <div className='col-md-6 bg-dark p-5'>
            <div className='row '>
              <div className='col-md-6 '>
                <img src={this.state.data.image} className='img-fluid mt-4 p-4 border border-4 rounded-5 bg-danger border-info' />
              </div>
              <div className='col-md-6 border border-4 rounded-5 text-warning  w-50 border-white'>
                <h1 className='display-4'>
                {this.state.data.firstName+' '+this .state.data.lastName}</h1>
                <h2 className=''>
                {this.state.data.age}</h2>
                <h2 className='display-'>
                {this.state.data.email}</h2>
                <h2>{this.state.data.address.address}</h2>
                </div>
            </div>
          </div>:<div className='display-1'>loading........</div>}
        </div>
      </div>
    )
  }
}

