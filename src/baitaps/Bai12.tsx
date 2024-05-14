import React, { Component, ChangeEvent } from 'react';

interface Props {}
interface State {
  data: string;
}
export default class Bai12 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ data: event.target.value });
  };
  render() {
    return (
      <div style={{ height: '300px' }}>
        <p>Dữ liệu: {this.state.data}</p>
        <input type="text" value={this.state.data} onChange={this.handleChange} />
      </div>
    );
  }
}