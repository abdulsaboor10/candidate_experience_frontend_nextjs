import Link from 'next/link'
import React from 'react'

const CandidatesTable = () => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-sm text-center text-xl text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm text-center text-xl font-medium text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" className="text-sm text-center text-xl font-medium text-gray-900 px-6 py-4 text-left">
                                        Phone
                                    </th>
                                    <th scope="col" className="text-sm text-center text-xl font-medium text-gray-900 px-6 py-4 text-left">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100 border-b">
                                    <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                    <td className="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Abdul Saboor
                                    </td>
                                    <td className="text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        +923051681343
                                    </td>
                                    <td className="text-center text-sm flex justify-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <div className='flex gap-6'>
                                            <Link href={"/candidate/12"}>
                                                <button className=' bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>View</button>
                                            </Link>
                                            <button className=' bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded'>Delete</button>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                        <div className='flex justify-end mt-6'>
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex -space-x-px text-sm">
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                    </li>
                                    <li>
                                        <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidatesTable