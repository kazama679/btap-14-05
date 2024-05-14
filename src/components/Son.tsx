import React, { Component } from 'react'

interface User{
    name:string,
    age:number,
    isMale: boolean
}
export default class Son extends Component<{props:User},User> {
  render() {
    return (
      <div>
        <p>Tên: {this.props.props.name}</p>
        <p>Tuổi: {this.props.props.age}</p>
      </div>
    )
  }
}
