import React from 'react'
import { AiOutlineSafety } from "react-icons/ai";
import { FaMountainSun } from "react-icons/fa6";


function About() {
  return (
    <>
      <section className="mt-[6%]">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest  uppercase title-font">
                Why choose us?
              </h2>
              <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                We know tech, we know finance. We are fintech experts.
              </p>
              <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                We know how to handle taxation for all the countried we operate in. We
                care for our customers and help them manage cashflows.
              </p>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500">
                      <AiOutlineSafety className='w-12 h-12' />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Proper Guide & Sefty
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                    impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <AiOutlineSafety className='w-12 h-12' />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Amazing View Points
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                    impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Low Transaction Cost
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                    impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Powerful Dashboard
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                    impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* rounded galary section  */}

      <div
        class="mx-auto w-full max-w-4xl bg-white justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-6">
        <a target="_blank" href="">
          <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/442910/brand-apple.svg" />
        </a>
        <a target="_blank" href="">
          <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/443329/brand-pixar.svg" />
        </a>
        <a target="_blank" href="">
          <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/443079/brand-geforce.svg" />
        </a>
        <a target="_blank" href="">
          <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/443042/brand-ethereum.svg" />
        </a>
        <a target="_blank" href="">
          <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/443206/brand-line.svg" />
        </a>
        <a target="_blank" href="">
          <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/519278/slack.svg" />
        </a>
      </div>

      {/* ABOUT Section */}
      <div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-8 bg-gray-50 ">
        <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
          {/*  */}
          <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
            <div className="relative">
              {/* Side Img 1 */}
              <img
                className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src="https://cdn.pixabay.com/photo/2023/05/29/14/05/mountains-8026175_1280.jpg"
                alt="Side Image"
              />
              {/* Side Img 2 */}
              <img
                className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src="https://cdn.pixabay.com/photo/2021/10/11/18/58/lake-6701636_1280.jpg"
                alt="Side Image 2"
              />
              {/* Side Img 3 */}
              <img
                className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmbG93ZXJ8ZW58MHwwfHx8MTcyMDk0OTQ2MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Side Image 3"
              />
              {/* Main Img */}
              <img
                className="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-gray-500"
                src="https://cdn.pixabay.com/photo/2016/06/17/04/26/mountain-1462655_1280.jpg"
                alt="About us"
              />
            </div>
            
            <div className="lg:w-[60%] p-4 w-full h-full shadow-xl  flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
              <h2 className="text-4xl text-center text-gray-600  font-bold px-4 py-1 md:mt-0 mt-10">
                About Us
              </h2>
              <p className="md:text-3xl text-2xl text-center text-gray-800 font-bold my-5">
                We are Petal Haven S.C.
              </p>
              <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 ">
                At Petal Haven, we believe in the transformative power of flowers.
                Our blooms are not just arrangements; they are expressions of
                beauty, joy, and emotion. From elegant bouquets to enchanting floral
                designs, we curate every creation with precision and care. Whether
                it's a celebration, a gesture of love, or a moment of solace, Petal
                Haven's exquisite flowers speak a language of their own, bringing
                nature's beauty to your doorstep. Experience the enchantment of
                Petal Haven and let flowers tell your story.
              </p>
              {/* button */}
              {/* <button className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-gray-600 rounded-sm lg:text-xl text-lg text-white font-semibold">
                Read More
              </button> */}
            </div>
          </div>
        </div>
      </div>





      {/* Review of people goes here  */}


      <div className="w-[100%] flex rounded gap-2 p-4 mx-auto overflow-hidden   backdrop-blur-lg">
        <div className="relative p-4 ">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-pink-900 dark:via-purple-900 dark:to-indigo-900"></div>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)",
                backgroundSize: "20px 20px"
              }}
            ></div>
          </div>
          {/* Content Container */}
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute w-28 h-28 -inset-0.5 bg-gradient-to-r  rounded-full blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
                <img
                  src="https://randomuser.me/api/portraits/men/99.jpg"
                  className="relative w-24 h-24 rounded-full object-cover border-2 border-white "
                  alt="Christian Nguyen"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 ">
                  Christian Nguyen
                </h2>
                <p className="mt-1 text-gray-600 ">
                  Christian is a versatile content writer with a strong background in
                  web development.
                </p>
              </div>
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://www.youtube.com/@mcqmate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200  dark:bg-gray-700/50 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.5949 4.45999C21.5421 4.71353 22.2865 5.45785 22.54 6.40501C22.9982 8.12001 23 11.7004 23 11.7004C23 11.7004 23 15.2807 22.54 16.9957C22.2865 17.9429 21.5421 18.6872 20.5949 18.9407C18.88 19.4007 12 19.4007 12 19.4007C12 19.4007 5.12001 19.4007 3.405 18.9407C2.45785 18.6872 1.71353 17.9429 1.45999 16.9957C1 15.2807 1 11.7004 1 11.7004C1 11.7004 1 8.12001 1.45999 6.40501C1.71353 5.45785 2.45785 4.71353 3.405 4.45999C5.12001 4 12 4 12 4C12 4 18.88 4 20.5949 4.45999ZM15.5134 11.7007L9.79788 15.0003V8.40101L15.5134 11.7007Z"
                      stroke="currentColor"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>YouTube</span>
                </a>
                <a
                  href="https://mcqmate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700/50 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    ></path>
                  </svg>
                  <span>Website</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-4 ">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-pink-900 dark:via-purple-900 dark:to-indigo-900"></div>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)",
                backgroundSize: "20px 20px"
              }}
            ></div>
          </div>
          {/* Content Container */}
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute w-28 h-28 -inset-0.5 bg-gradient-to-r  rounded-full blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
                <img
                  src="https://randomuser.me/api/portraits/men/99.jpg"
                  className="relative w-24 h-24 rounded-full object-cover border-2 border-white "
                  alt="Christian Nguyen"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 ">
                  Christian Nguyen
                </h2>
                <p className="mt-1 text-gray-600 ">
                  Christian is a versatile content writer with a strong background in
                  web development.
                </p>
              </div>
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://www.youtube.com/@mcqmate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200  dark:bg-gray-700/50 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.5949 4.45999C21.5421 4.71353 22.2865 5.45785 22.54 6.40501C22.9982 8.12001 23 11.7004 23 11.7004C23 11.7004 23 15.2807 22.54 16.9957C22.2865 17.9429 21.5421 18.6872 20.5949 18.9407C18.88 19.4007 12 19.4007 12 19.4007C12 19.4007 5.12001 19.4007 3.405 18.9407C2.45785 18.6872 1.71353 17.9429 1.45999 16.9957C1 15.2807 1 11.7004 1 11.7004C1 11.7004 1 8.12001 1.45999 6.40501C1.71353 5.45785 2.45785 4.71353 3.405 4.45999C5.12001 4 12 4 12 4C12 4 18.88 4 20.5949 4.45999ZM15.5134 11.7007L9.79788 15.0003V8.40101L15.5134 11.7007Z"
                      stroke="currentColor"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>YouTube</span>
                </a>
                <a
                  href="https://mcqmate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700/50 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    ></path>
                  </svg>
                  <span>Website</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-4 ">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-pink-900 dark:via-purple-900 dark:to-indigo-900"></div>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)",
                backgroundSize: "20px 20px"
              }}
            ></div>
          </div>
          {/* Content Container */}
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute w-28 h-28 -inset-0.5 bg-gradient-to-r  rounded-full blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
                <img
                  src="https://randomuser.me/api/portraits/men/99.jpg"
                  className="relative w-24 h-24 rounded-full object-cover border-2 border-white "
                  alt="Christian Nguyen"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 ">
                  Christian Nguyen
                </h2>
                <p className="mt-1 text-gray-600 ">
                  Christian is a versatile content writer with a strong background in
                  web development.
                </p>
              </div>
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://www.youtube.com/@mcqmate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200  dark:bg-gray-700/50 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.5949 4.45999C21.5421 4.71353 22.2865 5.45785 22.54 6.40501C22.9982 8.12001 23 11.7004 23 11.7004C23 11.7004 23 15.2807 22.54 16.9957C22.2865 17.9429 21.5421 18.6872 20.5949 18.9407C18.88 19.4007 12 19.4007 12 19.4007C12 19.4007 5.12001 19.4007 3.405 18.9407C2.45785 18.6872 1.71353 17.9429 1.45999 16.9957C1 15.2807 1 11.7004 1 11.7004C1 11.7004 1 8.12001 1.45999 6.40501C1.71353 5.45785 2.45785 4.71353 3.405 4.45999C5.12001 4 12 4 12 4C12 4 18.88 4 20.5949 4.45999ZM15.5134 11.7007L9.79788 15.0003V8.40101L15.5134 11.7007Z"
                      stroke="currentColor"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>YouTube</span>
                </a>
                <a
                  href="https://mcqmate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700/50 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    ></path>
                  </svg>
                  <span>Website</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About