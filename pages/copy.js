import Head from 'next/head';
import {BsFillMoonStarsFill, BsTextCenter} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub} from "react-icons/ai";
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState, useRef } from 'react';




export default function Home() {
  const[darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
        <section className='min-h-screen'>
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white' >contact me</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
                </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-700 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href='https://drive.google.com/file/d/1327ahUxoG2T9ZzTKBbtMlfUBjre3KooY/view?usp=share_link'>Resume</a>
                </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400'>Tony Botello</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-teal-500'>Developer and designer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl  dark:text-white'>Computer Science Graduate Seeking a Full-Time Position Computer Science Graduate Seeking a Full-Time Position Computer Science Graduate Seeking a Full-Time Position</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-500'>
            <a className='dark:text-teal-400'  href='twitter.com'><AiFillTwitterCircle/></a>
            <a className='dark:text-teal-400' href='https://www.linkedin.com/in/marco-botello-56286b211/'><AiFillLinkedin/></a>
            <a className='dark:text-teal-400' href='https://github.com/Marco-Botello'><AiFillGithub/></a>
          </div> 
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 to-white rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 lg:h-'>
            <Image src={deved} layout="fill" objectFit="cover"/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 mt-20  dark:text-teal-400'>About Me</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-teal-300'> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </div>
          <div className=' lg:flex lg:pl-5 lg:gap-5 xl:pl-20 xl:gap-20' >
            <div className='text-center p-10 shadow-lg rounded-xl my-10 lg:my-30 lg:mx-50 dark:bg-gray-900'>
              <div className='relative mx-auto bg-gradient-to-b from-teal-500 to-white rounded-full w-40 h-40 mt-20 overflow-hidden md:h-40 md:w-40 lg:h-60 lg:w-60'><Image src={code} layout="fill"/></div>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-teal-400'>Many Languages </h3>
              <p className='py-2 dark:text-teal-300'>Paragraph about my coding background. Paragraph about my coding background. </p>
              <h4 className='py-4 text-teal-600'> Some languages I know</h4>
              <p className='text-gray-800 py-1 dark:text-white'>C++</p>
              <p className='text-gray-800 py-1 dark:text-white'>JavaScript</p>
              <p className='text-gray-800 py-1 dark:text-white'>Python</p>
              <p className='text-gray-800 py-1 dark:text-white'>C#</p>
            </div>

            <div className='text-center p-10 shadow-lg rounded-xl my-10 lg:my-30 lg:mx-50 dark:bg-gray-900'>
              <div className='relative mx-auto bg-gradient-to-b from-teal-500 to-white rounded-full w-40 h-40 mt-20 overflow-hidden md:h-40 md:w-40 lg:h-60 lg:w-60'><Image src={design} layout="fill"/></div>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-teal-400'>Many Languages </h3>
              <p className='py-2 dark:text-teal-300'>Paragraph about my coding background. Paragraph about my coding background. </p>
              <h4 className='py-4 text-teal-600'> Some languages I know</h4>
              <p className='text-gray-800 py-1 dark:text-white'>C++</p>
              <p className='text-gray-800 py-1 dark:text-white'>JavaScript</p>
              <p className='text-gray-800 py-1 dark:text-white'>Python</p>
              <p className='text-gray-800 py-1 dark:text-white'>C#</p>
            </div>

            <div className='text-center p-10 shadow-lg rounded-xl my-10 lg:my-30 lg:mx-50  dark:bg-gray-900'>
              <div className='relative mx-auto bg-gradient-to-b from-teal-500 to-white rounded-full w-40 h-40 mt-20 overflow-hidden md:h-40 md:w-40 lg:h-60 lg:w-60'><Image src={consulting} layout="fill"/></div>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-teal-400'>Many Language etc</h3>
              <p className='py-2 dark:text-teal-300'>Paragraph about my coding background. Paragraph about my coding background. </p>
              <h4 className='py-4 text-teal-600'> Some languages I know</h4>
              <p className='text-gray-800 py-1 dark:text-white'>C++</p>
              <p className='text-gray-800 py-1 dark:text-white'>JavaScript</p>
              <p className='text-gray-800 py-1 dark:text-white'>Python</p>
              <p className='text-gray-800 py-1 dark:text-white'>C#</p>
            </div>

          </div>
        </section>
        <section>
          <div>
            <h3 className='text-4xl py-1 text-center dark:text-teal-400'>Projects</h3>
            <p className='text-medium py-5 leading-8 text-gray-800'>Paragraph about projects here</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap '>
            <div className='basis-1/3 flex-1'><a href='https://github.com/Marco-Botello/CPSC484UnrealProject'><Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></a></div>
            <div className='basis-1/3 flex-1'><a href='https://github.com/slimsloth/Coronavirusmap'><Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></a></div>
            <div className='basis-1/3 flex-1'><a href='https://github.com/rteoh/tripslip'><Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></a></div>
            <div className='basis-1/3 flex-1'><a href='https://github.com/g3aguirr/kanject'><Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></a></div>
          </div>
        </section>

      </main>

    </div>

  )
}
