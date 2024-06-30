import React from 'react'
import git from './images/git.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import mail from './images/mail.svg'
import pfp from './images/pfp.jpg'

const Home = () => {
    return (
        <div className='items-center bg-gradient-to-b from-zinc-800 via-zinc-900 to-black flex flex-row p-3 pt-14 sm:pt-auto sm:p-24'>
            <div className='text-gray-300 mr-12 text-xl'>
                Hi, I'm 👋🏼 <br/>
                <b className='text-4xl text-green-400'>anurag sachan</b>
                <br/> - <em className='text-sky-400'>developer</em> & <em className='text-sky-400'>derivatives trader. </em>
                <p>
                &nbsp;<br/>
                I like to build scalable architecture on the cloud.<br/>
                 I have hands on experience in different aspects of Backend Engineering and Cloud Native technologies.<br/>
                  Hugely interested in Microservices, API Gateways & Low Latency Systems.
                </p>
                &nbsp;<br/>
                <div className='flex flex-row mt-2'>
                    <a href='https://github.com/anurag-sachan' target='_blank' rel='noreferrer'><img className='h-11 w-11 rounded-full bg-white m-1 transition duration-700 hover:rotate-[360deg]' src={git} alt="git"/></a>
                    <a href='https://twitter.com/theanuragsachan' target='_blank' rel='noreferrer'><img className='h-11 w-11 rounded-full bg-white m-1 transition duration-700 hover:rotate-[360deg]' src={twitter} alt="twitter"/></a>
                    <a href='https://www.linkedin.com/in/the-anurag-sachan/' target='_blank' rel='noreferrer'><img className='h-11 w-11 rounded-full bg-white m-1 transition duration-700 hover:rotate-[360deg]' src={linkedin} alt="linkedin"/></a>
                    <a href='mailto:connect2anurags@gmail.com' target='_blank' rel='noreferrer'><img className='h-11 w-11 rounded-full bg-white m-1 transition duration-700 hover:rotate-[360deg]' src={mail} alt="mail"/></a>
                </div>
            </div>
            <div className='shrink-0'>
                <img className='invisible md:visible h-[22vw] w-[22vw] border-2 border-gray-200 rounded-full transition ease-in-out hover:scale-105 duration-200' src={pfp} alt="pfp"/>
            </div>
        </div>
      )
}

export default Home