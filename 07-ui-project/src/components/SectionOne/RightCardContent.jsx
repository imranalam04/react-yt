import React from 'react'
import { RiArrowRightLine } from "@remixicon/react"


const RightCardContent = (props) => {
    return (
        <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">
            <h2 className="text-xl bg-white p-2 rounded-full h-12 w-12 justify-center flex items-center font-semibold">{props.id + 1}</h2>
            <div>
                <p className="text-md leading-normal text-white mb-14 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quam asperiores et illo aut modi?</p>
                <div className="flex justify-between">
                    <button style={{backgroundColor:props.color}} className=" text-white font-medium px-6 py-2 rounded-full ">{props.tag}</button>
                    <button className=" text-white font-medium px-3 py-3 rounded-full "><RiArrowRightLine /></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent