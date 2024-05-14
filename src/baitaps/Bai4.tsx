import React, { Component } from 'react'
import SonBai4 from './SonBai4'
interface Parent{
  name:string
}
export default class Bai4 extends Component<{},Parent> {
  constructor(props:Parent){
    super(props)
    this.state={
      name:'Quang'
    }
  }
  render() {
    return (
      <div>
        <SonBai4 a={this.state.name}></SonBai4>
      </div>
    )
  }
}
