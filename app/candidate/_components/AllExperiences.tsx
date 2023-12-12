"use client"

import Experience from '@/app/_components/Experience'
import { CandidateWithExperiencesType, ExperienceType } from '@/app/_types'
import React, { useEffect, useState } from 'react'

type PropsType = {
    candidateId: string
}

const fetchCandidateExperiences = async (id: string): Promise<ExperienceType[] | null> => {
    try {
        let url = `${process.env.NEXT_PUBLIC_API_URI}candidate/${id}/experiences`

        const response = await fetch(`http://localhost:8080/candidate/${id}/experiences`)
        if (!response.ok) {
            return null
        }
        const data = await response.json();
        console.log("EXPERIENCES : ",data)
        return data

    } catch (error) {
        console.log("Error fetch experiences ",error)
        return null
    }
}

const AllExperiences = ({ candidateId }: PropsType) => {
    const [hide, setViewMore] = useState<Boolean>(true)
    const [loading, setLoading] = useState<Boolean>(false)
    const [experiences, setExperiences] = useState<ExperienceType[]>([])
    const toggleView = () => {
        setViewMore((prev) => !prev)
    }
    const fetchExperiences = async () => {
        console.log("CALLING fetch experience")
        if (experiences?.length == 0) {
            setLoading(true)
            const data = await fetchCandidateExperiences(candidateId)
            setLoading(false)
            if (data) {
                setExperiences(data);
            }
        }
    }
    const handleViewMore = async () => {
        fetchExperiences()
        toggleView()
    }



    return (
        <div>
            {!hide && <div>
                <div className='mb-3 mt-[50px]'>
                    <p className='text-[16px] font-thin'>
                        (All Experiences)
                    </p>
                </div>
                <div className='flex gap-4 flex-col'>
                    {loading ? <p className='text-center'>Loading ...</p> :
                        experiences.length == 0 ? <p className='text-center'>No Experience</p> :
                            experiences.map((experience) => {
                                return <Experience 
                                key={experience.id}
                                id={experience.id}
                                title={experience.title} 
                                startDate={experience.startDate} 
                                endDate={experience.endDate} 
                                companyName={experience.companyName} />
                            })
                    }
                </div>
            </div>
            }
            <button onClick={handleViewMore} className='my-6 text-blue-500 underline underline-offset-[4px] text-sm'>
                {hide ? 'Show All' : 'Hide All'}
            </button>
        </div>
    )
}

export default AllExperiences