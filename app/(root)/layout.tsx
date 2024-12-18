import LeftSidebar from '@/components/Shared/navbar/LeftSidebar'
import Navbar from '@/components/Shared/navbar/Navbar'
import RightSidebar from '@/components/Shared/navbar/RightSidebar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
   <main className='background-light850_dark100 relative'>
      <Navbar/>
      <div className='flex'>
           <LeftSidebar/>
            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14 '>
                <div className='mx-auto w-full max-w-5xl'>
                  {children}
                </div>
             
            </section>
           <RightSidebar/>
            
      </div>
      Toaster
   </main>
  )
}

export default layout