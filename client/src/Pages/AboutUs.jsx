import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="bg-black text-gray-300 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#48CAE4] mb-6">
            About ButtonJS
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ButtonJS is a one-person passion project, crafted to give developers
            <storng className="text-[#48CAE4] font-medium">
              {" "}
              instant access
            </storng>{" "}
            to beautifully designed, production-ready
            <span className="text-[#48CAE4] font-medium">
              {" "}
              React + TailwindCSS{" "}
            </span>
            buttons — no configs, no setup, just pure speed.
          </p>
        </div>
      </section>

      {/* About Story */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#48CAE4] mb-6">The Story</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          I built <span className="text-white font-semibold">ButtonJS</span> out
          of frustration — every time I started a new project, I wasted hours
          tweaking a simple button. I wanted something clean, modern, and easy
          to use without digging through CSS files or setting up complicated
          configs. So, I made my own.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Now, ButtonJS is here to help you skip the busy work and focus on what
          really matters: <b>building great experiences.</b>
        </p>
      </section>

      {/* Feature Highlights */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#48CAE4] mb-10 text-center">
            Why ButtonJS Stands Out
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-800 p-6 rounded-xl hover:border-[#48CAE4] transition">
              <h3 className="text-xl font-semibold text-white mb-3">
                Pure Simplicity
              </h3>
              <p className="text-gray-400">
                No setup, no config — copy and paste your favorite button into
                your React + Tailwind project instantly.
              </p>
            </div>
            <div className="bg-black border border-gray-800 p-6 rounded-xl hover:border-[#48CAE4] transition">
              <h3 className="text-xl font-semibold text-white mb-3">
                Professional Design
              </h3>
              <p className="text-gray-400">
                Each button is carefully crafted with animations, gradients, and
                modern design trends.
              </p>
            </div>
            <div className="bg-black border border-gray-800 p-6 rounded-xl hover:border-[#48CAE4] transition">
              <h3 className="text-xl font-semibold text-white mb-3">
                Built by a Developer
              </h3>
              <p className="text-gray-400">
                I’m a developer just like you — I know what works and what’s
                just design fluff. ButtonJS is made for speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solo Founder Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#48CAE4] mb-6">About Dev</h2>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gray-800 border-4 border-[#48CAE4] mb-4">
            <img
              src="https://ik.imagekit.io/hassaan/Hassaan_haider__2dNLntbQJ"
              alt="Hassaan haider dev"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 onClick={()=>window.open('https://hassaan-haider.netlify.app')} className="text-xl font-semibold cursor-pointer hover:scale-105 duration-200 transition-all text-white">
            Hassaan Haider .Dev
          </h3>
          <p className="text-gray-400">Solo Founder & Developer</p>
          <p className="max-w-2xl mt-6 text-gray-400 leading-relaxed">
            I’m a passionate developer who loves building tools that help other
            developers move faster. ButtonJS is my way of sharing a piece of my
            workflow with the community.
          </p>
        </div>
      </section>

     
    </div>
  );
}
