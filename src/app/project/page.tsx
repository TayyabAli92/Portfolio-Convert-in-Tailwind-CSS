import Image from "next/image";

export default function Project() {
  return (
    <div className="bg-[#383636] flex flex-col weight-16px max-w-[100%] mx-auto gap-12 pt-8 pb-8">
      <h1 className="text-white font-bold text-3xl text-center">My Projects</h1>
      <div className="flex gap-5 justify-center flex-wrap">
        <div className="w-[290px] bg-[#242222] animate-fadeInUp [box-shadow:0px_0px_20px_wheat] rounded-lg overflow-hidden p-5 text-center transition-transform duration-300 hover:translate-y-[-5px]">
          <Image
            src="/countdown timer.PNG"
            alt="Countdown Timer"
            width={300}
            height={250}
            className="rounded-md mb-4 shadow"
          />
          <h3 className="text-white font-bold text-xl mb-2">Countdown Timer</h3>
          <p className="text-gray-300 text-sm mb-4">
            A website powered by Next.js and TypeScript, featuring an
            interactive countdown function for tracking events.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-700">
            <a
              href="https://count-down-timer-beryl.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Timer
            </a>
          </button>
        </div>

        <div className="w-[290px] bg-[#242222] animate-fadeInUp [box-shadow:0px_0px_20px_wheat] rounded-lg overflow-hidden p-5 text-center transition-transform duration-300 hover:translate-y-[-5px]">
          <Image
            src="/cv.png"
            alt="Static Interactive Resume"
            width={300}
            height={250}
            className="rounded-md mb-4 shadow"
          />
          <h3 className="text-white font-bold text-xl mb-2">Static Interactive Resume</h3>
          <p className="text-gray-300 text-sm mb-4">
            An interactive resume built with TypeScript, HTML, and CSS, enabling
            users to dynamically showcase their skills.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-700">
            <a
              href="https://static-interactive-resume-builder-kpbu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </button>
        </div>

        <div className="w-[290px] bg-[#242222] animate-fadeInUp [box-shadow:0px_0px_20px_wheat] rounded-lg overflow-hidden p-5 text-center transition-transform duration-300 hover:translate-y-[-5px]">
          <Image
            src="/todo-list.PNG"
            alt="Todo List"
            width={300}
            height={250}
            className="rounded-md mb-4 shadow"
          />
          <h3 className="text-white font-bold text-xl mb-2">Todo List</h3>
          <p className="text-gray-300 text-sm mb-4">
            A task management application built with React and TypeScript,
            designed for efficient organization and productivity.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-700">
            <a
              href="https://todo-list-chi-lovat.vercel.app/?vercelToolbarCode=kH2-UXAi21lRa2p"
              target="_blank"
              rel="noopener noreferrer"
            >
              View List
            </a>
          </button>
        </div>

        <div className="w-[290px] bg-[#242222] animate-fadeInUp [box-shadow:0px_0px_20px_wheat] rounded-lg overflow-hidden p-5 text-center transition-transform duration-300 hover:translate-y-[-5px]">
          <Image
            src="/digital-clock.PNG"
            alt="Clock"
            width={300}
            height={250}
            className="rounded-md mb-4 shadow"
          />
          <h3 className="text-white font-bold text-xl mb-2">Digital Clock</h3>
          <p className="text-gray-300 text-sm mb-4">
          A digital clock is a contemporary device designed to measure and display time in a numerical format.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-700">
            <a
              href="https://next-js-digital-clock-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Clock
            </a>
          </button>
        </div>

        <div className="w-[290px] bg-[#242222] animate-fadeInUp [box-shadow:0px_0px_20px_wheat] rounded-lg overflow-hidden p-5 text-center transition-transform duration-300 hover:translate-y-[-5px]">
          <Image
            src="/calculator.PNG"
            alt="Clock"
            width={300}
            height={250}
            className="rounded-md mb-4 shadow"
          />
          <h3 className="text-white font-bold text-xl mb-2">Calculator</h3>
          <p className="text-gray-300 text-sm mb-4">
          A digital clock is a contemporary device designed to measure and display time in a numerical format.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-700">
            <a
              href="https://next-js-simple-calculator.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Calculator
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}