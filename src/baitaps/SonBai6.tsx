import React, { Component } from 'react'
interface User{
    id:number,
    name:string,
    address:string,
    email:string
}
export default class Bai6 extends Component<{a:User},User> {
  render() {
    return (
      <div>
        ------------------------------
        <p>Id: {this.props.a.id}</p>
        <p>Tên: {this.props.a.name}</p>
        <p>Địa chỉ: {this.props.a.address}</p>
        <p>Email: {this.props.a.email}</p>
      </div>
    )
  }
}