import React, { Component } from 'react';

interface TodoItem {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  created_at: Date;
}
interface Props {}
interface State {
  todoList: TodoItem[];
}
export default class Todolist extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todoList: [{
        id: 1,
        name: 'abc',
        assign: 'Nguyễn Xuân Quang',
        status: true,
        created_at: new Date(),
      },
      {
        id: 2,
        name: 'xyz',
        assign: 'Nguyễn Văn A',
        status: false,
        created_at: new Date(),
      }],
    };
  }
  formatStatus(status: boolean): string {
    return status ? 'Hoàn thành' : 'Chưa hoàn thành';
  }
  formatCreatedAt(created_at: Date): string {
    const formattedDate = created_at.toLocaleDateString('en-VN');
    const formattedTime = created_at.toLocaleTimeString('en-VN');
    return `${formattedDate} ${formattedTime}`;
  }
  render() {
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên công việc</th>
            <th>Người thực hiện</th>
            <th>Trạng thái</th>
            <th>Thời gian tạo</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
        {this.state.todoList.map((a,i) => (
            <tr key={a.id}>
              <td>{i+1}</td>
              <td>{a.name}</td>
              <td>{a.assign}</td>
              <td>{this.formatStatus(a.status)}</td>
              <td>{this.formatCreatedAt(a.created_at)}</td>
              <td>Sửa | Xóa</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}