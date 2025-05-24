export default function Navbar() {
    return(
        <div className="flex border-b border-white/15 flex-row justify-between px-12 items-center h-16">
            <div>
                <h1 className="font-bold font-mono text-2xl">YuD3</h1>
            </div>
            <div className="flex flex-row gap-4">
                <div className="font-mono font-semibold"><a href="#">Skills</a></div>
                <div className="font-mono font-semibold"><a href="#">Projects</a></div>
                <div className="font-mono font-semibold"><a href="#">About Me</a></div>
                <div className="font-mono font-semibold"><a href="#">Contact</a></div>
            </div>
        </div>
    )
}