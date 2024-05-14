import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  address: string;
}
export default function Bai3() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Quang', address: 'HN' },
    { id: 2, name: 'Anh', address: 'HP' }
  ]);
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}