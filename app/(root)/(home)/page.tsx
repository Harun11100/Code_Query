import LocalSearch from '@/components/localSearch'
import React from 'react'

const Home = () => {
  return (
   <section>
     <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
   </section>
  )
}

export default Home