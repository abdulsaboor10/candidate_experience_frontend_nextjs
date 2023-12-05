import Link from 'next/link'
import React from 'react'
import { CandidateListType } from '../_types'
import { useRouter } from 'next/router';
import { URLSearchParams } from 'url';
import DeleteCandidateBtn from './DeleteCandidateBtn';
type CandidateTablePropType = {
    offset:string
} 



const fetchCandidates = async (offset:any): Promise<CandidateListType | null> => {
    try {
      const response = await fetch("http://localhost:8080/candidate?" + new URLSearchParams({
        offset
      }) ,{
        cache : "no-store"
      });
  
      if (!response.ok) {
        console.log("Request failed with status:", response.status);
        return null;
      }
  
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error:", err);
      return null;
    }
  };

const CandidatesTable = async (props:CandidateTablePropType) => {
    

    const data = await fetchCandidates(props.offset)
    const content = data?.content || []
    if (!data || !data.content){
        return (
            <h3 className='text-center'>
                Failed to load Data
            </h3>
        )
    }
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
                                {content.map((item, index) => {
                                    return (
                                        <tr key={index} className="bg-gray-100 border-b">
                                            {/* <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{Number(data?.pageable.offset)*Number(data?.pageable.pageSize) + (index + 1)}</td> */}
                                            <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{Number(data?.pageable.pageNumber)*Number(data?.pageable.pageSize)+(index+1)}</td>
                                            <td className="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {item.name}
                                            </td>
                                            <td className="text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {item.phoneNo}
                                            </td>
                                            <td className="text-center text-sm flex justify-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className='flex gap-3'>
                                                    <Link href={`/candidate/${item.id}`}>
                                                        <button className=' bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>View</button>
                                                    </Link>
                                                    <DeleteCandidateBtn id={item.id}/>
                                                    {/* <button className=' bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded'>Delete</button> */}
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>

                        <div className='flex justify-end mt-6'>
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex -space-x-px text-sm">
                                    <li>
                                        <a href={`?offset=${0}`} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                                    </li>

                                    {new Array(data?.totalPages).fill(0).map((_, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={`?offset=${index}`} aria-current="page" className={`flex items-center justify-center px-3 h-8 ${index == data?.pageable.pageNumber ? "text-blue-600" : "text-gray-500"} border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}>{index + 1}</a>
                                            </li>
                                        )
                                    })}
                                    <li>
                                        <a href={`?offset=${0}`} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
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