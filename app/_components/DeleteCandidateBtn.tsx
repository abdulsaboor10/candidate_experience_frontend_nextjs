"use client"

import React from 'react'

type PropsType = {
    id: number
}

const DeleteCandidateBtn = ({ id }: PropsType) => {
    const handleOnClick = async () => {
        try {
            alert("hello")
            const response = await fetch("http://localhost:8080/candidate/" + id, {
                method: "DELETE"
            });
            console.log(response)

            if (!response.ok) {
                alert("Failed to delete candidate")
                return
            }
            window.location.reload()


        } catch (error) {
            alert("Failed to delete candidate")
            console.log(error)
        }
    }
    return (
        <button onClick={handleOnClick} className=' bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded'>Delete</button>
    )
}

export default DeleteCandidateBtn