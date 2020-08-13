import React, { Component } from 'react'

export default class Member extends Component {
  render(){
    return ( 
    <div>
        {this.props.children[0].props.name} 
    </div>
    )
  }
}
  

