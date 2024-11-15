'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const Searchbar = () => {
      const[val,setVal]=useState('')
  return (
      <div className='flex'>
       <input
            placeholder='Type any name '
            type='input'
            value={val}
            onChange={(e)=>setVal(e.target.value)}
            className='px-5 py-2 border-2 rounded-md'
            />

       <Image
       src='/assets/icons/hamburger.svg'
       alt='searchbar'
       width={20}
       height={20}/>
      </div>
   
  )
}

export default Searchbar