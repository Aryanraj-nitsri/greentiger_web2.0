import React from 'react'

export default function Fullwidth({children}) {
  return (
    <div className='w-full overflow-x-hidden'>
        {children}
    </div>
  )
}
