'use client';
import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import { useRouter } from 'next/navigation'

export default function HomeSearch() {
    const[input,setInput]=useState('');
    const[randomSearchLoading,setRandonSearchLoading]=useState(false);
    const router=useRouter();

    const SubmitHandler=(e)=>{
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    };

    const RandomSearch=async(e)=>{
        setRandonSearchLoading(true);
        const response= await fetch('https://random-word-api.herokuapp.com/word')
        .then((res)=>res.json())
        .then((data)=>data[0]);
        if(!response) return;
        router.push(`/search/web?searchTerm=${response}`);
        setRandonSearchLoading(false);
    }

  return (
    <>
        <form 
        onSubmit={SubmitHandler}
        className='flex w-full mt-5 mx-auto max-w-[90%]  border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
            <AiOutlineSearch className='text-xl text-gray-500 mr-3'/>
            <input type="text" 
            className='flex-grow focus:outline-none' 
            onChange={e=>setInput(e.target.value)}
            />
            <BsFillMicFill className='text-lg'/>
        </form>
        <div className=" flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
            <button onClick={SubmitHandler} className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'>Google Search</button>
            <button 
            disabled={randomSearchLoading}
            onClick={RandomSearch} 
            className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'
            >
                {
                    randomSearchLoading ? 'Loading...' : 'I am Feeling Lucky'
                }
            </button>
        </div>
    </>
  )
}
