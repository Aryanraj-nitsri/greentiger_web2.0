import React from 'react'

export default function CustomWidth({children}) {
  return (
    <div className="w-3/5 m-auto border border-red-600 p-3">
        {children}
    </div>
  )
}
