import React, { useState } from 'react'

export default function Bai2() {
    const [id,setId]=useState<number>(1);
    const [fullName,setFullName]=useState<string>('Nguyễn Xuân Quang');
    const [date,setDate]=useState<string>('02/07/2005');
    const [address,setAddress]=useState<string>('Hà Nội');
  return (
    <div>
        <p>id: {id}</p>
        <p>Tên: {fullName}</p>
        <p>Ngày sinh: {date}</p>
        <p>Địa chỉ: {address}</p>
    </div>
  )
}
