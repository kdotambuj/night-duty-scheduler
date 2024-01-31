import Table from './Table'


const Info = () =>{
    return (
        <div className="flex flex-col pt-[120px] items-center bg-yellow-200 h-[100vh] w-[50%]">
            <p className='underline font-semibold  '>RA DHA SVA AA MI</p>
            <p className="text-3xl font-semibold pt-[20px] ">MEHARBAGH NIGHT PEHRA SCHEDULE</p>
            <p className="text-red-500 text-medium font-medium  ">NOTE:- All brothers are requested to tie-up with your partner before starting the Night Pahra.</p>
          
            <p className='text-black text-lg font-semibold pt-10 pb-4 '>Important Contact Numbers</p>
            <div>
               <Table />
            </div>
            

        </div>
    )
}

export default Info