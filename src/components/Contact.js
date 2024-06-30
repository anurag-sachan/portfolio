import React from 'react'
import git from './images/git.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import mail from './images/mail.svg'

const Contact = () => {
  return (
    <div className='bg-black text-white'>
    <footer className='p-3 sm:p-24 flex flex-col sm:flex-row justify-between'>
        <div className='p-4 collapse sm:visible'>
            <b>anurag.</b>
        </div>
        <div className='p-4'>
            <b>Address</b><br/>
            India 🇮🇳
        </div>
        <div className='p-4'>
            <b>Contact</b><br/>
            +91 8004802732<br/>
            connect2anurags@gmail.com
        </div>
        <div className='collapse lg:visible'>
            <div className='p-4'>
                <b>Follow Me</b>
            </div>
            <div className='flex flex-row px-4'>
                <a href='https://github.com/anurag-sachan' target='_blank' rel='noreferrer'><img className='h-9 w-9 rounded-full bg-white m-1 hover:scale-110 duration-200' src={git} alt="git"/></a>
                <a href='https://twitter.com/theanuragsachan' target='_blank' rel='noreferrer'><img className='h-9 w-9 rounded-full bg-white m-1 hover:scale-110 duration-200' src={twitter} alt="twitter"/></a>
                <a href='https://www.linkedin.com/in/the-anurag-sachan/' target='_blank' rel='noreferrer'><img className='h-9 w-9 rounded-full bg-white m-1 hover:scale-110 duration-200' src={linkedin} alt="linkedin"/></a>
                <a href='mailto:connect2anurags@gmail.com' target='_blank' rel='noreferrer'><img className='h-9 w-9 rounded-full bg-white m-1 hover:scale-110 duration-200' src={mail} alt="mail"/></a>
            </div>
        </div>
    </footer>
    <div class="border-t text-sm text-center p-1">
    © 2023. Developed & Maintained by <b className='text-green-400'>Anurag Sachan</b>.    
    </div>
    </div>
  )
}

export default Contact