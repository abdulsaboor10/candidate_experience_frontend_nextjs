import Experience from '@/app/_components/Experience'
import Link from 'next/link'
import React from 'react'

const Candidate = () => {
    return (
        <div className='flex w-full justify-center'>
            <div className="w-[50%] mt-[50px]">

                {/* Candidate Info */}
                <div className='mt-8 flex flex-col gap-2 border-b-2 py-2'>
                    <p className=' text-[20px]'>
                        Abdul Saboor
                    </p>
                    <p className=' text-gray-600 text-[18px]'>
                        +923051681343
                    </p>
                    <p className=' text-gray-600 text-[14px] font-thin italic'>
                        Feb 2,2002
                    </p>
                </div>

                {/* Add New Experience */}
                <div className='flex justify-end my-4'>
                    <Link href={"/experience/create"}>
                        <button className='bg-slate-700 hover:bg-slate-800 text-white py-1 px-2 rounded text-[12px]'>
                            Add New Experience
                        </button>
                    </Link>
                </div>


                {/* Recent Experience */}
                <div className='mt-4'>
                    <p className='mb-2 text-[16px] font-thin mt-[50px]'>
                        (Recent Experience)
                    </p>
                    <Experience />
                </div>

                {/* All Experiences */}
                <div className='mb-3 mt-[50px]'>
                    <p className='text-[16px] font-thin'>
                        (All Experiences)
                    </p>
                </div>
                <div className='flex gap-4 flex-col'>
                    {new Array(5).fill(0).map(() => {
                        return (
                            <Experience />
                        )
                    })}
                </div>
                <button className='my-6 text-blue-500 underline underline-offset-[4px] text-sm'>
                    View Less
                </button>
            </div>
        </div>
    )
}

export default Candidate