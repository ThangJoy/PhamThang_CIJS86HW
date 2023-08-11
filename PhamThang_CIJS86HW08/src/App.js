import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css'
export default function Clock() {
  const [date, setDate]= useState (new Date())
  useEffect (()=>{
  const timer = setInterval(() => {
    setDate (new Date());
   }, 1000);
    return ()=>{
      clearInterval (timer)
    }
  })

  console.log(date)
  return (
    <div className='d-flex flex-column align-items-center'>
      <h1> Thời gian: {date.toLocaleTimeString()}</h1>
      <h1> Ngày: {date.toLocaleDateString()}</h1>
      <Calendar value={date} />
    </div>
  )
}