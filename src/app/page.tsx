export default function Home() {
  return (
    <div className="flex flex-col px-16  items-center justify-start">
      <section className="w-full justify-between items-center flex flex-row h-80 py-4 px-8">
        <div className="flex flex-col justify-center items-start gap-8 ">
            <h2 className="font-sans text-white/75 font-bold text-6xl">Hi, I'm a <br />Web Developer</h2>
            <a href="#" className="px-4 font-sans font-semibold py-2 bg-white/5 border transition-all border-white/20 rounded hover:bg-white/20">View My Work</a>
        </div>
        <div className="flex justify-center items-center px-8">
          <span className="text-9xl font-mono font-extrabold text-white/65">&lt;/&gt;</span>
        </div>
      </section>
    </div>
  );
}
