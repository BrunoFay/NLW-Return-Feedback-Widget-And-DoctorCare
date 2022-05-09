import { CircleNotch } from 'phosphor-react'
import React from 'react'

export default function Loading() {
  return (
    <div className='w-6 h-6 flex items-center justify-center'>
      <CircleNotch className='w-4 h-4 animate-spin duration-75'/>
    </div>
  )
}
