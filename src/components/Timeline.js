import React from 'react'
import stars from './images/Stars.jpg'
import resume from '../anurag_resume2023.pdf'

const Timeline = () => {
  return (
  <div style={{backgroundImage: `url(${stars})`}} class="h-screen p-3 flex flex-col justify-center sm:py-12">
    <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
    <div className='text-center text-2xl text-white pb-12 pt-8 sm:pt-auto'>Projects</div>
      <div class="relative text-gray-700 antialiased text-sm font-semibold">

        <div class="hidden sm:block w-1 bg-blue-300 absolute h-[584px] left-1/2 transform -translate-x-1/2"></div>

        <div class="mt-6 sm:mt-0 sm:mb-12">
          <div class="flex flex-col sm:flex-row items-center">
            <div class="flex justify-start w-full mx-auto items-center">
              <div class="w-full sm:w-1/2 sm:pr-8">
                <div class="p-4 bg-white rounded shadow">
                  <div class="text-cyan-500 font-bold">
                    March 22 - June 22
                  </div>
                  <p className='text-lg'>
                    Java Backend Development
                  </p>
                </div>
              </div>
            </div>
            <div class="rounded-full bg-blue-500 border-white border-4 h-9 w-9 sm:w-11 sm:h-11 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-7 sm:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-0 sm:mb-12">
          <div class="flex flex-col sm:flex-row items-center">
            <div class="flex justify-end w-full mx-auto items-center">
              <div class="w-full sm:w-1/2 sm:pl-8">
                <div class="p-4 bg-white rounded shadow">
                  <div class="text-cyan-500 font-bold">
                    Aug 22 - Dec 22
                  </div>
                  <p className='text-lg'>
                    DevOps
                  </p>
                </div>
              </div>
            </div>
            <div class="rounded-full bg-blue-500 border-white border-4 h-9 w-9 sm:w-11 sm:h-11 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-7 sm:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-0 sm:mb-12">
          <div class="flex flex-col sm:flex-row items-center">
            <div class="flex justify-start w-full mx-auto items-center">
              <div class="w-full sm:w-1/2 sm:pr-8">
                <div class="p-4 bg-white rounded shadow">
                  <div class="text-cyan-500 font-bold">
                    Feb 23 - June 23
                  </div>
                  <p className='text-lg'>
                    Spring Full Stack Development
                  </p>
                </div>
              </div>
            </div>
            <div class="rounded-full bg-blue-500 border-white border-4 h-9 w-9 sm:w-11 sm:h-11 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-7 sm:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-0">
          <div class="flex flex-col sm:flex-row items-center">
            <div class="flex justify-end w-full mx-auto items-center">
              <div class="w-full sm:w-1/2 sm:pl-8">
                <div class="p-4 bg-white rounded shadow">
                  <div class="text-cyan-500 font-bold">
                    June 23 - Present
                  </div>
                  <p className='text-lg'>
                    C++
                  </p>
                </div>
              </div>
            </div>
            <div class="rounded-full bg-blue-500 border-white border-4 h-9 w-9 sm:w-11 sm:h-11 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-7 sm:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <a href={resume} target='_blank'><div className='self-center text-center w-1/3 text-lg sm:text-2xl bg-white text-gray-800 py-1 px-1 sm:px-3 mt-16 mx-auto rounded-md hover:bg-blue-500 hover:text-white hover:cursor-pointer'><b>↓ RESUME</b></div></a>
    </div>
  </div>
  )
}

export default Timeline