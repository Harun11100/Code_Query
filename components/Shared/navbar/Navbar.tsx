import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    
    <nav className=' flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-dark-300 dark:shadow-none sm:px-12 '>
        <Link href={'/'} className='flex items-center gap-1'>
        <Image
          src='/assets/images/site-logo.svg'
          alt='codeQuery'
          width={23}
          height={23}
        
        
        />
        <p className='h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden'>
            Code<span className='text-primary-500'>Query</span>
        </p>
        </Link>
        <Searchbar/>
        <div>
            theme
            <SignedIn>
               <UserButton 
               appearance={{
                  elements:{
                        avatarBox:'h-10 w-10'
                  },
                  variables:{
                        colorPrimary:'#ff7000'
                  }
               }}
               
               /> 
            </SignedIn>
            Mobile navbar
        </div>
    </nav>
  )
}

export default Navbar