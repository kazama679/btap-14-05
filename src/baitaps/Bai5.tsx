import React, { Component } from 'react'
import SonBai5 from './SonBai5'
interface Product{
  id:number,
  name:string,
  price:number,
  quantity:number
}
export default class Bai5 extends Component<{},Product> {
  constructor(props:Product){
    super(props)
    this.state ={
      id:1,
      name:'Bưởi',
      price:123000,
      quantity:7
    }
  }
  render() {
    return (
      <div>
        <SonBai5 a={this.state}></SonBai5>
      </div>
    )
  }
}
