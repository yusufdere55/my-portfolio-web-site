import Image from "next/image";
import { useMemo } from "react";

export default function Home() {

  const techStack = useMemo(() => [
    ...Array.from({length:8},(_,i) => `./images/tech-stack/${i+1}.svg`)
  ],[]);
  
  return (
    <div className="flex flex-col gap-12 items-center justify-center">
      <section className="w-full justify-evenly items-center flex flex-row h-[28rem] py-4 px-8">
        <div className="flex flex-col justify-around items-start gap-8 ">
            <h2 className="font-sans text-white/85 leading-[80px] font-bold text-6xl">Hi, I'm a <br /><b className="gradient-text">Web Developer</b></h2>
            <a href="#" className="px-4 font-sans font-bold py-2 bg-white/5 border transition-all border-white/20 rounded hover:bg-white/20">View My Work</a>
        </div>
        <div className="flex justify-center items-center px-8">
          <Image src="/images/image1.svg" draggable="false" className="filter drop-shadow-[0_5px_2px_rgba(67,45,215,0.7)]" width={350} height={350} alt="Dev Image" />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-4 gap-12">
        <h2 className="font-sans font-extrabold text-5xl text-white/85 ">My Tech Stack</h2>
        <div className="grid grid-cols-5 gap-12">
          {techStack.map((src,key) => (
            <div key={key} className="bg-white/10 rounded p-4">
              <Image src={src} draggable="false" width={60} height={60} alt="" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
