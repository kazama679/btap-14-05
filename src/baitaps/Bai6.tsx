import React, { Component } from "react";
import SonBai6 from "./SonBai6";
interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}

interface Prop {}

interface State {
  users: User[];
}

export default class Bai6 extends Component<Prop, State> {
  constructor(props: User) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Quang",
          address: "HN",
          email: "quang@gmail.com",
        },
        {
          id: 2,
          name: "Quang",
          address: "HN",
          email: "quang@gmail.com",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <SonBai6 key={user.id} a={user}></SonBai6>
        ))}
      </div>
    );
  }
}