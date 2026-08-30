import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props)
  return (
    <div className='h-full p-6 w-2/3 '>
      <div id="right" className="flex overflow-x-auto flex-nowrap gap-10 w-full h-full">
        {props.users.map((elem,idx) => {
          return <RightCard img={elem.img} color={elem.color} id={idx} tag={elem.tag} key={idx} />
        })}
      </div>

    </div>
  )
}

export default RightContent