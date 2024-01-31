import * as React from 'react';
import Button from './Button';
import {differenceInDays, endOfMonth, getDay, startOfMonth} from 'date-fns'
import Cell from './Cell';
import { Link } from 'react-router-dom';

export default function DatePick({month,year,currentDate}) {
    

  const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  const monthName= ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const startDate = startOfMonth(currentDate)
  const endDate = endOfMonth(currentDate)
  const numDays = differenceInDays(endDate,startDate)+1
  const prefixDays = startDate.getDay()
  const suffixDays = 6-endDate.getDay()


  const [selectedDate,setSelectedDate] = React.useState(1)

  const handleClick = (day) =>{
    setSelectedDate(day)
    console.log(selectedDate) 
}

  return (
    <div className='h-[500px] flex flex-col items-center w-[650px]'>
        <div className='flex justify-center pt-2  mb-2'>
         <p className='text-2xl text-black font-semibold  '>{monthName[month]} {year}</p>
        </div>

        <div className='flex justify-center pt-2 mb-2 text-xl '><p>Selected Date : {selectedDate}-{monthName[month]}-2024 </p></div>

        <div className='grid grid-cols-7  text-lg m-2 border-l border-t border-gray-400  justify-center  '>
            {
                weekdays.map((day)=>(<Cell text={day}/>))
            }

            {
                Array.from({length:prefixDays}).map((day,index)=>(<Cell text={''} />))
            }

            {
                Array.from({length:numDays}).map((day,index)=>(
                    <Button text={index+1} onClick={()=>{handleClick(index+1)}} reserved={false}  />
                ))
            }

            {
                Array.from({length:suffixDays}).map((day,index)=>(<Cell text={''}/>))
            }
        </div>

       <button className='bg-blue-400 mt-4  w-[90px] h-[40px] rounded-l-full rounded-r-full  hover:bg-blue-600 focus:bg-blue-600  text-white font-medium'>Submit</button> 
       
    </div>
  );
}