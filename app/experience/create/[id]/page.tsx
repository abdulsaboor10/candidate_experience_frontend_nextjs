"use client"
import moment from 'moment'
import { redirect, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Datepicker from "tailwind-datepicker-react"

const options = {
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	clearBtnText: "Clear",
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		// background: "bg-gray-700 dark:bg-gray-800",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		// disabledText: "bg-red-500",
		input: "",
		inputIcon: "",
		selected: "",
	},
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

type PropsType = {
	params: {
		id: string
	}
}
const CreateExperience = ({ params }: PropsType) => {
	const [showStartDate, setShowStartDate] = useState<boolean>(false)
	const [showEndDate, setShowEndDate] = useState<boolean>(false)

	const [title, setTitle] = useState("")
	const [company, setCompany] = useState("")
	const [startDate, setStartDate] = useState(new Date("2022-01-01"))
	const [endDate, setEndDate] = useState(new Date("2022-01-01"))


	const router = useRouter()


	const handleChangeStartDate = (selectedDate: Date) => {
		// let s = moment(selectedDate).format("YYYY-MM-DD")
		setStartDate(selectedDate)
	}
	const handleCloseStartDate = (state: boolean) => {
		setShowStartDate(state)
	}
	const handleChangeEndDate = (selectedDate: Date) => {
		// let s = moment(selectedDate).format("YYYY-MM-DD")
		setEndDate(selectedDate)
	}
	const handleCloseEndDate = (state: boolean) => {
		setShowEndDate(state)
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		try {
			const data = {
				title,
				companyName: company,
				startDate :startDate,
				endDate:endDate
			}


			const response = await fetch("http://localhost:8080/experience/" + params.id, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
	
				body: JSON.stringify(data),
			});



			if (!response.ok) {
				alert("Failed to add new experience")
			}
			window.location.href = `/candidate/${params.id}`


		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className="mt-[100px] w-[500px] mx-auto">

			<div className='text-center my-8'>
				<span className="font-bold text-xl">Create Experience</span>
			</div>
			<div>
				<div className="flex flex-col gap-8">
					<div className="relative z-0 w-full mb-5 group">
						<input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="floating_title" id="floating_title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label htmlFor="floating_title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<input value={company} onChange={(e) => setCompany(e.target.value)} type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name</label>
					</div>
					<div className="relative">
						<p className='text-sm mb-2 font-[500]'>
							Start Date :
						</p>
						<Datepicker options={options} onChange={handleChangeStartDate} show={showStartDate} setShow={handleCloseStartDate} />
					</div>
					<div className="relative">
						<p className='text-sm mb-2 font-[500]'>
							End Date :
						</p>
						<Datepicker options={options} onChange={handleChangeEndDate} show={showEndDate} setShow={handleCloseEndDate} />

					</div>
					{/* <div className="relative">
                        <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />

                    </div> */}

					<div className='flex justify-end'>
						<button onClick={handleSubmit} className="bg-slate-700 hover:bg-slate-800 text-white py-2 px-4 rounded">
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateExperience