import React, { Component } from "react";
import SonBai8 from "./SonBai8";

interface ListProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Prop {}

interface State {
  listProduct: ListProduct[];
}

export default class Bai8 extends Component<Prop, State> {
  constructor(props: Prop) { 
    super(props);
    this.state = {
      listProduct: [
        {
          id: 1,
          name: 'Cam',
          price: 15000,
          quantity: 12
        },
        {
          id: 2,
          name: 'Táo',
          price: 25000,
          quantity: 13
        },
        {
          id: 3,
          name: 'Xoài',
          price: 11000,
          quantity: 33
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên</th>
              <th>Giá</th>
              <th>Số lượng</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listProduct.map((product) => (
              <SonBai8 key={product.id} a={product} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}