import React, { Component } from 'react'
interface Props{

}
interface State{
    fullName:string
}
export default class Bai1 extends Component<Props, State> {
  constructor(props:Props){
    super(props)
    this.state = {
      fullName: 'Nguyễn Xuân Quang'
    }
  }
  render() {
    return (
      <div>
        Họ và tên: {this.state.fullName}
      </div>
    )
  }
}
