import ToggleTheme from "./theme-toggle";

export default function Navbar() {
    return(
        <div className="h-16">
            <div className="flex border-b fixed w-screen z-10 backdrop-blur-md backdrop-grayscale border-white/15 flex-row justify-around items-center h-16 dark:text-white dark:border-black/15 ">
                <div>
                    <h1 className="font-bold font-mono text-2xl">&lt;YuD3/&gt;</h1>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="font-mono font-semibold text-black transition-colors text-shadow-md text-shadow-black hover:text-[#615FFF] dark:text-white dark:hover:text-[#615FFF]"><a href="#">Skills</a></div>
                    <div className="font-mono font-semibold text-black transition-colors text-shadow-md text-shadow-black hover:text-[#615FFF] dark:text-white dark:hover:text-[#615FFF]"><a href="#">Projects</a></div>
                    <div className="font-mono font-semibold text-black transition-colors text-shadow-md text-shadow-black hover:text-[#615FFF] dark:text-white dark:hover:text-[#615FFF]"><a href="#">About Me</a></div>
                    <div className="font-mono font-semibold text-black transition-colors text-shadow-md text-shadow-black hover:text-[#615FFF] dark:text-white dark:hover:text-[#615FFF]"><a href="#">Contact</a></div>
                    <ToggleTheme />
                </div>
            </div>
        </div>
    )
}