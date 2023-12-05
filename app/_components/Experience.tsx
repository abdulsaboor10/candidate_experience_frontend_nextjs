import React from 'react'
import { ExperienceType } from '../_types'


const Experience = (props : ExperienceType) => {
    return (
        <div>
            <div className='flex justify-between items-center'>

                <p className=' text-[18px]'>
                    {props.title}
                </p>
                <p className=' text-gray-600 text-[14px] font-thin italic'>
                    {props.startDate} - {props.endDate}
                </p>
            </div>
            <p className=' text-gray-600 text-[16px]'>
                {props.companyName}
            </p>

        </div>
    )
}

export default Experience