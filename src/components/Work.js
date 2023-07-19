import React from 'react'

const Work = () => {
  return (
    <div className='bg-black text-white p-3 sm:p-24 h-fit bg-gradient-to-br from-black via-gray-800 to-cyan-700'>
    <div className='m-6 text-2xl text-center'>My Work Domain</div>
        <container class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            <div class="bg-white m-3 max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-xl text-black text-start mb-3">Spring Full Stack</div>
                <p class="text-gray-600 text-base">
                Built robust, scalable, and efficient server-side applications, leveraging Spring's powerful features. I excel in developing RESTful APIs and web services, ensuring seamless integration with various front-end systems and databases.                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span className='text-black text-sm font-semibold'>Tech:&nbsp;</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">java: spring</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">mvn</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">jwt-token</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">db: mysql, psql</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">hibernate</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">security</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">payment integration</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">html, css, js, react.js</span>
            </div>
            </div>
            <div class="bg-white m-3 max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-xl text-black text-start mb-3">DevOps</div>
                <p class="text-gray-600 text-base">
                Worked on bridging the gap between development and operations. My expertise lies in automating and optimizing the software delivery pipeline, ensuring efficient and seamless deployment. With a strong foundation in cloud technologies, containerization, and continuous integration/delivery, I thrive in creating scalable & distributed systems.</p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span className='text-black text-sm font-semibold'>Tech:&nbsp;</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">aws, gcp, azure</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">git</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">kubernetes</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">docker</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">jenkins</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">terraform</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">prometheus, grafana</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ansible</span>
            </div>
            </div>
            <div class="bg-white m-3 max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-xl text-black text-start mb-3">Low Latency</div>
                <p class="text-gray-600 text-base">
                Optimized software and systems for fast response times, ensuring real-time interactions and top-notch user experiences. I specialize in algorithm tuning, performance profiling, and network optimization, creating high-performance solutions for industries like finance & gaming where speed is paramount.</p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span className='text-black text-sm font-semibold'>Tech:&nbsp;</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">c++</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">rocket mq</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">kafka</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">gRPC</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">cassandra</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">redis</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">java: jvm, chronicle, gc</span>
            </div>
            </div>
        </container>
    </div>
    )
}

export default Work