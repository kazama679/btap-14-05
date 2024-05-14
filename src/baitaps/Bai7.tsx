import React, { Component } from "react";
import SonBai7 from "./SonBai7";
interface ListPost {
  id: number;
  title: string; 
  content: string;
  author: string;
}

interface Prop {}

interface State {
  listPost: ListPost[];
}

export default class Bai7 extends Component<Prop, State> {
  constructor(props: ListPost) {
    super(props);
    this.state = {
      listPost: [
        {
          id: 1,
          title: 'Tại sao nên học',
          content: 'Học để đi làm',
          author: 'Vô danh',
        },
        {
          id: 2,
          title: 'xyz',
          content: 'xyz',
          author: 'xyz',
        },
        {
          id: 3,
          title: 'abc',
          content: 'abc',
          author: 'abc',
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.listPost.map((ListPost) => (
          <SonBai7 key={ListPost.id} a={ListPost}></SonBai7>
        ))}
      </div>
    );
  }
}