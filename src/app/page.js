import HomeHeader from '@/components/HomeHeader'
import React from 'react'
import Image from 'next/image'
import HomeSearch from '@/components/HomeSearch'

const Home = () => {
  return (
    <>
      <HomeHeader/>
      <div className='flex flex-col items-center mt-24'>
        <Image  src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png' alt='google image' width={300} height={300} priority style={{width:'auto'}}/>
        <HomeSearch/>
      </div>
    </>
  )
}

export default Home