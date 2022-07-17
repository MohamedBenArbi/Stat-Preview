import React from 'react'

export default function Component1(props) {
    return (
        <div className="m-5 text-white bg-inherit">
            <div>
                <p className='text-3xl font-bold'>{props.number}</p>
            </div>

            <div>
                <p className='tracking-wider text-gray-500'>{props.text}</p>
            </div>
        </div>
    )
}
