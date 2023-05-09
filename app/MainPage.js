/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import devalex from '../public/dev-alex.png'
import mongodblogo from '../public/mongodb-logo.png'
import reactlogo from '../public/react-image.png'
import tslogo from '../public/ts-image.png'
import bootstraplogo from '../public/bootstrap-logo.png'
import tailwindlogo from '../public/tailwind-logo.png'
import angularlogo from '../public/angular-logo.png'
import hackanoid from '../public/hackanoid.png'
import ironfox from '../public/ironfox.png'
import medvice from '../public/medvice.png'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useState } from 'react'

export default function MainPage() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>
                    Alexandre Cunha Portfolio
                </title>
                <link rel="icon" href='./favicon.ico'></link>
            </Head>
            <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
                <section className='min-h-screen'>
                    <nav className='py-10 mb-12 flex justify-between'>
                        <a href='https://github.com/R3alistic' target="_blank"><h1 className='text-xl font-burtons dark:text-gray-50'>r3alistic</h1></a>
                        <ul className='flex items-center'>
                            <li>
                                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-gray-50' />
                            </li>
                            <li>
                                <a
                                    className='bg-gradient-to-r from-purple-500 to-red-600 text-white px-4 py-2 rounded-md ml-8'
                                    href='https://portfolio-acunha.vercel.app/resume.pdf'
                                    download='resume.pdf'
                                >
                                    Download CV
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className='text-center p-7'>
                        <h2 className='text-5xl py-2 text-violet-600 font-medium md:text-6xl'>Alexandre Cunha</h2>
                        <br />
                        <h3 className='text-2xp py-2 md:text-3xl dark:text-gray-50'>Front End Developer</h3>
                        <p className='text-md py-5 leading-8 text-gray-400  md:text-xl max-w-lg mx-auto'>Hello, I'm Alexandre, and I'm a front-end web developer.</p>
                        <p className='text-md py-5 leading-8 text-gray-400  md:text-xl max-w-lg mx-auto'>So far, I have gained <span className='text-violet-500'>entry-level</span> experience with the <span className='text-violet-500'>MERN Tech Stack</span> meaning I have worked with JavaScript, Typescript, React, Node, Express, ES6, MongoDB, HTML & CSS. In the meantime, I have also gained a good grasp of AGILE and SCRUM methodologies, used nowadays for application development all over the world.</p>
                        <p className='text-md py-5 leading-8 text-gray-400  md:text-xl max-w-lg mx-auto'>Check out my Github and LinkedIn pages down below!</p>
                    </div>
                    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-400'>
                        <a href='https://www.linkedin.com/in/alexandre-e-cunha/' target="_blank"><AiFillLinkedin /></a>
                        <a href='https://github.com/R3alistic' target="_blank"><AiFillGithub /></a>
                    </div>
                    <div >
                        <Image className='relative mx-auto rounded-full w-40 h-40 overflow-hidden md:h-40 md:w-40' style='objectFit' src={devalex} alt='' />
                    </div>
                </section>
                <br />
                <br />
                <section>
                    <div >
                        <br />
                        <p className='text-md py-5 leading-8 text-gray-400'>Having <span className='text-orange-500'>majored in Biomedical Laboratory Science</span> this means I was responsible for drawing/receiving samples from patients in clinics and, more recently, from a hospital and it's Emergency Room. During my time there I honed my teamwork and learning skills, in order to improve the teams' response time and efficiency.</p>
                        <p className='text-md py-5 leading-8 text-gray-400'>While searching for new things to learn and for a new chance in a new field of work I then decided to enrol in <span className='text-orange-500'>Ironhack's Web Development Bootcamp in September 2022</span> and during that time I have a new-found passion for tech and learning web development as a hard skill.</p>
                        <p className='text-md py-5 leading-8 text-gray-400'>I am currently looking into getting my first position as a <span className='text-orange-500'>Front-End Developer</span> and to increase my knowledge in new tech as much as I can, while finding interesting and motivating teams and projects along the way!</p>
                    </div>
                    <div className="lg:flex gap-10 mx-4 dark:text-white text-black">
                        <div className="text-center shadow-lg p-5 rounded-xl my-10 flex-1">
                            <div className='text-md flex justify-center gap-16 py-3'>
                                <Image src={reactlogo} width={75} height={75} alt='#' />
                                <Image src={tslogo} width={75} height={75} alt='#' />
                                <Image src={mongodblogo} width={75} height={75} alt='#' />
                            </div>
                            <p className="py-2">
                                Creating elegant web applications suited for your needs using ReactJS and TypeScript
                            </p>
                            <h2 className="py-6 text-violet-800">Tech Stack</h2>
                            <p className="py-1">MongoDB</p>
                            <p className="py-1">ExpressJS</p>
                            <p className="py-1">ReactJS</p>
                            <p className="py-1">NodeJS</p>
                        </div>
                        <div className="text-center shadow-lg p-5 rounded-xl my-10 flex-1">
                            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-400'>
                                <Image src={bootstraplogo} width={100} height={75} alt='#' />
                                <Image src={tailwindlogo} width={75} height={75} alt='#' />
                                <Image src={angularlogo} width={75} height={75} alt='#' />
                            </div>
                            <p className="py-4">
                                Styling your apps and using other technologies and frameworks
                            </p>
                            <p className="py-2">Bootstrap</p>
                            <p className="py-2">TailwindCSS</p>
                            <p className="py-2">AngularJS</p>
                            <p className="py-2">NextJS</p>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <section>
                    <div className='p-1'>
                        <h3 className='text-center text-3xl py-5 text-violet-600'>Projects</h3>
                        <p className='text-center text-sm py-5 leading-8 text-gray-400  md:text-xl max-w-xl mx-auto'>Ever since I started my bootcamp I have developed some projects and colaborated with talented people to create some cool apps. Here are some examples:</p>
                        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap text-center leading-4 text-gray-400 md:text-sm max-w-2xl mx-auto'>
                            <div className='basis-1/3 lg:basis-1/3 flex-1'>
                                <a href='https://hackernoid.netlify.app/' target="_blank"><Image className='rounded-lg object-cover py-4' src={hackanoid} width={500} height={500} responsive="true" alt='#' /></a>
                                <h3 className='text-center text-3xl py-4 dark:text-white text-black'>Hackanoid</h3>
                                <p>A single-player game using JavaScript (Canvas), HTML&CSS heavily inspired by Arkanoid, where players control a paddle-like craft and clear a formation of colorful blocks using a ball.</p>
                            </div>
                            <div className='basis-1/3 lg:basis-1/3 flex-1'>
                                <a href='https://ironfox.cyclic.app/' target="_blank"><Image className='rounded-lg object-cover py-4' src={ironfox} width={500} height={500} responsive="true" alt='#' /></a>
                                <h3 className='text-center text-3xl py-4 dark:text-white text-black'>IronFox</h3>
                                <p>Using Kitsu API, along with my knowledge of Node.JS, Express.JS, MongoDB, Mongoose and Handlebars, this is an app to register, search and save your favorite anime!</p>
                            </div>
                            <div className='basis-1 lg:basis-1/2 flex-1'>
                                <a href='https://medv1ce.netlify.app/' target="_blank"><Image className='rounded-lg object-cover py-4 inline-block' src={medvice} width={500} height={500} responsive="true" alt='#' /></a>
                                <h3 className='text-center text-3xl py-4 dark:text-white text-black'>MedVice</h3>
                                <p>A React App that allows you to generate boxes for easy tracking based on form information submitted by a registered user or filled using the OpenFDA API.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}