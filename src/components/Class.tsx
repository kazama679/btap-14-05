import React, { Component } from 'react'
interface Props{

}
interface State{
  name:string,
  age:number,
  address:string
}
export default class Class extends Component<Props,State> {
  constructor(props:Props){
    super(props)
    this.state={
      name: 'Minh Anh',
      age: 19,
      address:'HN'
    }
  }
  // khai báo hàm phải trên render
  handleClick=()=>{
    this.setState({
      address:'Hải Phòng'
    })
  }
  
  render() {
    return (
      <div>Class
      {/* 
        trong class để quản lý state

      */}
      {/* Hiển thị */}
      <p>{this.state.name} năm nay {this.state.age} và ở tại {this.state.address}</p>
      {/* Cập nhập state đối với class */}
      <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}