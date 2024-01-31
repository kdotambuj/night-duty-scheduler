import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const User= () => {
  const [name, setName] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [block, setBlock] = useState('');
  const [mobileNo, setMobileNo] = useState('');


  return (
    <div className='flex flex-col  h-[100vh] w-[50%]  items-center justify-center'>

      <h1 className='text-4xl font-semibold text-center pt-4   '>Your Details</h1>
      <form method='POST' id='form-details' className='flex flex-col gap-4 items-center mt-6 '>
        <div className='flex flex-col mx-20 gap-1  '>
            <label className='font-medium text-xl '>Name</label>
            <input placeholder='Your Name' className="rounded-sm pl-4 py-4 h-[36px] border-gray-500 focus:border-blue-400 focus:border-2  outline-none  border-[1px] w-[400px] " type="text" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='flex flex-col mx-20 gap-1  '>
            <label className='font-medium text-xl '>House No.</label>
            <input placeholder='House No.' className="rounded-sm pl-4 py-4 h-[36px] border-gray-500 focus:border-blue-400 focus:border-2  outline-none  border-[1px] w-[400px] " type="text" required value={houseNo} onChange={(e) => setHouseNo(e.target.value)} />
        </div>
        <div className='flex flex-col mx-20 gap-1  '>
            <label className='font-medium text-xl '>Block</label>
            <input placeholder='Block' className="rounded-sm pl-4 py-4 h-[36px] border-gray-500 focus:border-blue-400 focus:border-2  outline-none  border-[1px] w-[400px] " type="text" required value={block} onChange={(e) => setBlock(e.target.value)} />
        </div>
        <div className='flex flex-col mx-20 gap-1  '>
            <label className='font-medium text-xl '>Mobile No.</label>
            <input placeholder='Mobile No.' className="rounded-sm pl-4 py-4 h-[36px] border-gray-500 focus:border-blue-400 focus:border-2  outline-none  border-[1px] w-[400px] " type="text" required value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
        </div>
        <Link to={'/datepick'}> <input type='submit' className='bg-blue-400 mx-20 rounded-lg py-1 px-2  text-white font-lg focus:border-blac hover:bg-blue-600 cursor-pointer focus:border-[2px] ' /> </Link>
      </form>
      
    </div>
  );
};

export default User