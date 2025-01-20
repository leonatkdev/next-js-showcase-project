import { title } from 'process'
import React from 'react'

const TeamCard = () => {

    const data = [
        {
            img: '',
            name: 'Max Mitchell',
            title: 'Founder',
            link: '',
            mail: ''
        },
        {
            img: '',
            name: 'Max Mitchell',
            title: 'Founder',
            link: '',
            mail: ''
        },
        {
            img: '',
            name: 'Max Mitchell',
            title: 'Founder',
            link: '',
            mail: ''
        },
        {
            img: '',
            name: 'Max Mitchell',
            title: 'Founder',
            link: '',
            mail: ''
        },
    ]

  return (
    <div className="grid grid-flow-row lg:grid-cols-4 text-white gap-5">
        {data?.map((elm, index) => (
            <div className=" p-[20px] text-white border border-[#262626]  rounded-xl">
            <span>{elm?.name}</span>
            <p>{elm?.title}</p>
            </div>
        ) )}
    </div>
  )
}

export default TeamCard