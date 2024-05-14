import React, { Component } from 'react'
export default class SonBai4 extends Component<{a:string}> {
  render() {
    return (
      <div>
        <p>Tên: {this.props.a}</p>
      </div>
    )
  }
}
