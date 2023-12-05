import React from 'react'
import CandidatesTable from './_components/CandidatesTable'
import Link from 'next/link'

type Props = {
  searchParams: { 
    offset?:string
   };
};


const Home = ({searchParams}:Props) => {

  return (
    <div>
      <div className='mt-[100px]'>
        <div className='flex flex-row justify-between'>
          <span className=' text-2xl font-bold'>Candidates</span>
          <Link href="candidate/create">
            <button className=' bg-slate-700 hover:bg-slate-800 text-white p-2 rounded text-sm'>
              Add New
            </button>
          </Link>

        </div>
        <CandidatesTable offset={searchParams?.offset || "0"} />
      </div>

    </div>
  )
}

export default Home