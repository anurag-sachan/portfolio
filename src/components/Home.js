import React from 'react'
import git from './images/git.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import mail from './images/mail.svg'

const Home = () => {
    return (
        <div className='items-center h-screen bg-black flex flex-row p-3 pt-14 sm:pt-auto sm:p-24'>
            <div className='text-white mr-12 text-xl'>
                Hi, I'm 👋🏼 <br/>
                <b className='text-4xl text-green-400'>anurag sachan/></b>.
                <br/> - <em className='text-purple-500'>developer</em> & <em className='text-purple-500'>option trader</em>
                <p>
                &nbsp;<br/>
                I like to build scalable architecture on the cloud.<br/>
                 I have hands on experience in different aspects of Backend Engineering and Cloud Native technologies.<br/>
                  Hugely interested in Microservices, API Gateways & Low Latency Systems.
                </p>
                &nbsp;<br/>
                <div className='flex flex-row mt-2'>
                    <a href='https://github.com/anurag-sachan' target='_blank'><img className='h-11 w-11 rounded-full bg-white m-1 transition hover:rotate-[360deg]' src={git} alt="git"/></a>
                    <a href='https://twitter.com/theanuragsachan' target='_blank'><img className='h-11 w-11 rounded-full bg-white m-1 transition hover:rotate-[360deg]' src={twitter} alt="twitter"/></a>
                    <a href='https://www.linkedin.com/in/the-anurag-sachan/' target='_blank'><img className='h-11 w-11 rounded-full bg-white m-1 transition hover:rotate-[360deg]' src={linkedin} alt="linkedin"/></a>
                    <a href='mailto:connect2anurags@gmail.com' target='_blank'><img className='h-11 w-11 rounded-full bg-white m-1 transition hover:rotate-[360deg]' src={mail} alt="mail"/></a>
                </div>
            </div>
            <div className='shrink-0'>
                <img className='invisible md:visible h-[22vw] w-[22vw] border-2 border-gray-200 rounded-full transition ease-in-out hover:scale-95 duration-200' src="https://media.licdn.com/dms/image/D4D03AQGIlO-_qBIj9A/profile-displayphoto-shrink_800_800/0/1687172935052?e=1695254400&v=beta&t=h7HlxZ5VGuXDXWEmx1tp3NQhZL05c1wxlG-v0MdXPQE" alt="pfp"/>
            </div>
        </div>
      )
}

export default Home