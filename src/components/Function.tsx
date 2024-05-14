import { useState } from "react";

export default function Function() {
  const [fullName,setFullName]=useState<string>('Hoa');
  const [age,setAge]=useState<number>(20);
  const [students,setStudents]=useState<string[]>([]);
  const [isActive, setIsActive]=useState<boolean>(true);

  const handleChange=()=>{
    setFullName('Hồng');
    setAge(14);
  }
  return (
    <div> Function
        {/*
        State: dùng để quản lý dữ liệu trong component
        Đối với function để quản lý dữ liệu dùng useState,
        đây là 1 hook sinh ra giúp function có thể quản lý dữ liệu
        State thì có thể thay đổi giá trị được
        */}
        {/*Hiển thị*/}
        <p>{fullName} năm nay {age} tuổi.</p>
        <button onClick={handleChange}>Thay đổi tuổi</button>
    </div>
  )
}