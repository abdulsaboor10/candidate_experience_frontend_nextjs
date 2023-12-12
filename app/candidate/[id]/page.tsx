import Experience from '@/app/_components/Experience'
import { CandidateWithRecentExperienceType } from '@/app/_types'
import Link from 'next/link'
import React from 'react'
import AllExperiences from '../_components/AllExperiences'

type PropType = {
    params: {
        id: string
    }
}


const fetchCandidateWithRecentExperience = async (id: string): Promise<CandidateWithRecentExperienceType | null> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}candidate/${id}/with-recent-experience`,
        {cache: 'no-store'}
        )
        if (!response.ok) {
            return null
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.log("error fetch candidate data ", error)
        return null
    }
}

const Candidate = async ({ params }: PropType) => {
    const data = await fetchCandidateWithRecentExperience(params.id)
    if (!data) {
        return (
            <div>
                <h1>Failed to load data</h1>
            </div>
        )
    }
    return (
        <div className='flex w-full justify-center'>
            <div className="w-[50%] mt-[50px]">

                {/* Candidate Info */}
                <div className='mt-8 flex flex-col gap-2 border-b-2 py-2'>
                    <p className=' text-[20px]'>
                        {data.name}
                    </p>
                    <p className=' text-gray-600 text-[18px]'>
                        {data.phoneNo}
                    </p>
                    <p className=' text-gray-600 text-[14px] font-thin italic'>
                        {data.dob}
                    </p>
                </div>

                {/* Add New Experience */}
                <div className='flex justify-end my-4'>
                    <Link href={`/experience/create/${params.id}`} >
                        <button className='bg-slate-700 hover:bg-slate-800 text-white py-1 px-2 rounded text-[12px]'>
                            Add New Experience
                        </button>
                    </Link>
                </div>


                {/* Recent Experience */}
                {data.experience ?
                    <div className='mt-4'>
                        <p className='mb-2 text-[16px] font-thin mt-[50px]'>
                            (Recent Experience)
                        </p>
                        <Experience
                            id={data.experience.id}
                            title={data.experience.title}
                            startDate={data.experience.startDate}
                            endDate={data.experience.endDate}
                            companyName={data.experience.companyName}
                        />
                    </div>
                    : <div className='mt-4'>
                        <p className='text-center'>No Experience</p>
                    </div>
                }

                {/* All Experiences */}
                {data.experience && <AllExperiences candidateId={params.id} />}
            </div>
        </div>
    )
}

export default Candidate