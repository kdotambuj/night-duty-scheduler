import ReactDOM from 'react-dom/client';
import './index.css'
import './App.css'
import { RouterProvider,createBrowserRouter} from 'react-router-dom';
import App from './App'
import DatePick from './components/DatePick';
import { getMonth, getYear } from 'date-fns';
import React from 'react';



const root = ReactDOM.createRoot(document.getElementById('root'));
const currentDate = '2024-02-01'
const month = getMonth(currentDate)
const year = getYear(currentDate)

const router = createBrowserRouter([{
    path:"/",
    element:<App />
  },
   {
    path:'/datepick',
    element:  <div className='h-[100vh] flex  w-[100%] items-center justify-center'>
                          <DatePick month={month} year={year} currentDate={currentDate} />
              </div>
   }
  
  ])


root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );