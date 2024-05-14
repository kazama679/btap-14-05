import React, { Component } from 'react'
import Son from './Son';

interface User{
    name:string,
    age:number,
    isMale: boolean
}
export default class Chieu extends Component<{},User> {
    constructor(props:User){
        super(props);

        // định nghĩa các State bên trong component
        this.state = {
            name: 'Quang',
            age: 19,
            isMale: true
        }
    }
  render() {
    return (
      <div>
        <Son props={this.state}></Son>
      </div>
    )
  }
}
