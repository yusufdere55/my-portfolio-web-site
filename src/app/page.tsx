'use client'

import Image from "next/image";
import { useState,useMemo } from "react";
import PageLoader from "components/page-loader";

import Footer from "components/Footer";
import Navbar from "components/Navbar";

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  const techStack = useMemo(() => [
    ...Array.from({length:8},(_,i) => `./images/tech-stack/${i+1}.svg`)
  ],[]);

  if(loading)
    return <PageLoader onFinish={() => setLoading(false)} />


  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-12 items-center justify-center transition-all duration-300 ease-in-out bg-white dark:bg-[#1f1e1e]">
        <section className="w-full justify-evenly items-center flex flex-row h-[28rem] py-4 px-8">
          <div className="flex flex-col justify-around items-start gap-8 ">
              <h2 className="font-sans text-black/85 leading-[80px] font-bold text-6xl dark:text-white/75">Hi, I'm a <br /><b className="gradient-text">Web Developer</b></h2>
              <div className="flex flex-row gap-2">
                <a href="#" className="px-4 font-sans font-bold py-2 text-black bg-black/5 border transition-all border-black/20 rounded hover:bg-black/20 dark:bg-white/5 dark:border-white/20 dark:text-white dark:hover:bg-black/20
                ">
                  View My Work
                </a>
                <a href="#" className="px-4 font-sans font-bold py-2 text-black bg-black/5 border transition-all border-black/20 rounded hover:bg-black/20 dark:bg-white/5 dark:border-white/20 dark:text-white dark:hover:bg-black/20
                ">
                  CV
                </a>
              </div>
          </div>
          <div className="flex justify-center items-center px-8">
            <Image src="/images/image1.svg" draggable="false" className="filter drop-shadow-[0_5px_2px_rgba(67,45,215,0.7)]" width={350} height={350} alt="Dev Image" />
          </div>
        </section>
        <section className="flex flex-col bg-black/20 w-full justify-center items-center py-24 gap-20 dark:bg-black/50">
          <h2 className="font-sans font-extrabold text-5xl text-black/85 dark:text-white/85">My Tech Stack</h2>
          <div className="grid grid-cols-5 gap-12">
            {techStack.map((src,key) => (
              <div key={key} className="bg-white border hover:rotate-12 border-gray-200 shadow-sm transition-all rounded p-4 duration-500 cursor-pointer
                 hover:bg-gray-100 hover:shadow-md
                 dark:bg-white/10 dark:border-white/20 dark:hover:bg-white/20">
                <Image src={src} draggable="false" width={55} height={55} alt="" />
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col justify-center items-center py-4 gap-12">
            
        </section>
      </div>
      <Footer />
    </>
  );
}
