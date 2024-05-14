import React, { Component } from 'react';

interface Edit {
  theme: string;
  language: string;
}

interface Props {}

export default class Bai9 extends Component<Props, Edit> {
  constructor(props: Props) {
    super(props);
    this.state = {
      theme: 'dark',
      language: 'vietnamese'
    };
  }
  render() {
    const { theme, language } = this.state;
    return (
      <div>
        <div className={`${theme === "dark" ? "dark" : "light"}`} style={{height: 300, width: 400, border: '1px solid #dadada'}}>
        <p>Nền: {theme === "dark" ? "Nền đen" : "Nền trắng"}</p>
        <p>Ngôn ngữ: {language === `vietnamese` ? 'Tiếng việt' : 'Tiếng Anh'}</p>
        </div>
      </div>
    );
  }
}
