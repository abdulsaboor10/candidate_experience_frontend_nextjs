'use client'

import React, { useState } from 'react'
import Datepicker from "tailwind-datepicker-react"
import { IOptions } from 'tailwind-datepicker-react/types/Options'

const options: IOptions = {
	title: "Date of birth",
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	clearBtnText: "Clear",
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => <span className='text-sm'>Previous</span>,
		next: () => <span className='text-sm'>Next</span>,
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date("2022-01-01"),
	language: "en",
	disabledDates: [],
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Select Date",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
}

const AddCandidate = () => {
    const [showDate, setShowDate] = useState < boolean > (false)
	const [dob , setDob] = useState(new Date("2022-01-01"))
	const [name , setName] = useState("")
	const [phoneNo , setPhoneNo] = useState("")
	const handleChange = (selectedDate: Date) => {
		setDob(selectedDate)
	}
	const handleClose = (state: boolean) => {
		setShowDate(state)
	}

	const handleFormSubmit = async () => {
		try {
			const data = {
				name,
				phoneNo,
				dob
			}

			const response = await fetch(process.env.NEXT_PUBLIC_API_URI + "candidate/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
	
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				alert("Failed to add new experience")
			}
			window.location.href = `/`
		} catch (error) {
			alert("Failed to create a new candidate")
			
		}
	}
    return (
        <div className="mt-[100px] w-[500px] mx-auto">

            <div className='text-center my-8'>
                <span className="font-bold text-xl">Create a New Candidate</span>
            </div>
            <div>
                <div className="flex flex-col gap-8">
                    <div className="relative z-0 w-full mb-5 group">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} type="text" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                    </div>
                    
                    <div className="relative">
                        <Datepicker options={options} onChange={handleChange} show={showDate} setShow={handleClose} />
                    </div>
                    <div className='flex justify-end'>
                        <button onClick={handleFormSubmit} className="bg-slate-700 hover:bg-slate-800 text-white py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCandidate