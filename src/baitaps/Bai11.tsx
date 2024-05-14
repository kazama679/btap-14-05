import React, { Component } from 'react';

interface Props {}
interface State {
  name: string;
}
export default class Bai11 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: 'Rikkei Academy',
    };
  }
  handleClick = () => {
    this.setState(check => ({
      name: check.name === 'Rikkei Academy' ? 'Rikkei Soft' : 'Rikkei Academy'
    }));
  }
  render() {
    return (
      <div>
        <p>Tên công ty: {this.state.name}</p>
        <button onClick={this.handleClick}>click</button> {/* em lấy luôn ví dụ của thầy Hai trên lớp, nên tên biến có thể giống các bạn */}
      </div>
    );
  }
}