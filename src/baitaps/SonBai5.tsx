import React, { Component } from 'react'
interface Product{
  id:number,
  name:string,
  price:number,
  quantity:number
}
export default class Bai5 extends Component<{a:Product},Product> {
  render() {
    return (
      <div>
        <h3>Dữ liệu trong component con</h3>
        <p>id: {this.props.a.id}</p>
        <p>tên sản phẩm: {this.props.a.name}</p>
        <p>giá: {this.props.a.price}</p>
        <p>số lượng: {this.props.a.quantity}</p>
      </div>
    )
  }
}
