import React, { Component } from 'react'
interface ListPost {
    id: number;
    title: string; 
    content: string;
    author: string;
  }
export default class Bai7 extends Component<{a:ListPost},ListPost> {
  render() {
    return (
      <div>
        <p>Id: {this.props.a.id}</p>
        <p>Tiêu đề: {this.props.a.title}</p>
        <p>ND: {this.props.a.content}</p>
        <p>Tác giả: {this.props.a.author}</p>
        ------------------------------
      </div>
    )
  }
}