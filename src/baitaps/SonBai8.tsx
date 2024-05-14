import React, { Component } from 'react'
interface ListProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
export default class Bai8 extends Component<{a:ListProduct},ListProduct> {
  render() {
    return (
        <tr>
            <td>{this.props.a.id}</td>
            <td>{this.props.a.name}</td>
            <td>{this.props.a.price}</td>
            <td>{this.props.a.quantity}</td>
        </tr>
    )
  }
}