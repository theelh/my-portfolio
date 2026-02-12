import { Head, Link } from '@inertiajs/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2Icon, DownloadIcon, FolderKeyIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import AppTop from '@/components/app-top'
import { BrainScene } from '@/components/BrainScene'
import Chatbot from '@/components/chatbot'
import TerminalSection from '@/components/TerminalSection'


export default function Welcome() {
     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
     useEffect(() => {
        const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
        })

        // 🔥 VERY IMPORTANT
        ScrollTrigger.refresh()

        return () => {
        smoother.paused()
        }
    }, [])

    const techFlex  = [
    { title: "HTML", icon: "/icons/html-5.png" },
    { title: "CSS", icon: "/icons/css-file-format-symbol.png" },
    { title: "Node js ", icon: "/icons/programing.png" },
    { title: "PHP", icon: "/icons/php.png" },
    { title: "My SQL", icon: "/icons/mysql.png" },
    { title: "JAVA", icon: "/icons/java.png" },
    { title: "PYTHON", icon: "/icons/python.png" },
    { title: "Type-Script", icon: "/icons/typescript.png" },
    { title: "HugginFace AI Models", icon: "/icons/generative.png" },
    { title: "Rest API", icon: "/icons/cloud-api.png" },
    { title: "3D Three JS", icon: "/icons/3d-model.png" },
  ]
  
  const [isHovering, setIsHovering] = useState(Boolean)
useEffect(() => {
  const lens = document.querySelector(".lens")

  let mouseX = 0
  let mouseY = 0
  let currentX = 0
  let currentY = 0

  const speed = 0.12 // lower = smoother inertia

  
  const move = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  window.addEventListener("mousemove", move)

  const animate = () => {
    currentX += (mouseX - currentX) * speed
    currentY += (mouseY - currentY) * speed

    if (lens) {
      lens.setAttribute(
        "style",
        `transform: translate(${currentX}px, ${currentY}px) translate(-50%, -50%) scale(1.08);`
      )
    }

    requestAnimationFrame(animate)
  }

  animate()

  return () => {
    window.removeEventListener("mousemove", move)
  }
}, [])



  return (
    <div
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
>
  {/* Chatbot global */}
      <Chatbot />
      <Head title="Welcome">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>
      {/* ✅ Background container with controlled layering */}
          <div  className="h-full fixed flex inset-0 items-end justify-end overflow-hidden z-0">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full fixed h-full object-cover"
            >
                <source src="/videos/vd-2.mp4" type="video/mp4" />
            </video>
            {/* Glass Cursor Effect */}
            <div className="lens fixed pointer-events-none z-20" />
          </div>

      {/* 🌟 FOREGROUND CONTENT */}
      <div id="smooth-wrapper">
      <div id="smooth-content" className="relative z-10 min-h-screen flex flex-col items-center py-6 text-[#1b1b18] lg:justify-center">
        {/* <header className="mb-6 w-full max-w-[335px] text-sm lg:max-w-4xl">
          <nav className="flex items-center justify-end gap-4">
            {auth.user ? (
              <Link
                href={dashboard()}
                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href={login()}
                  className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal"
                >
                  Log in
                </Link>

                {canRegister && (
                  <Link
                    href={register()}
                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal"
                  >
                    Register
                  </Link>
                )}
              </>
            )}
          </nav>
        </header> */}

        <AppTop/>

        <main className="flex gap-8 items-center w-full my-40 h-full max-w-83.75 lg:max-w-7xl">
          <div className="w-full">
            <TerminalSection/>
          </div>
          <div className="w-full z-10 h-[70vh]">
            <BrainScene/>
          </div>
        </main>


        <main className=" w-full py-32 h-full max-w-full bg-[#131313] font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <p className="text-[16px] text-[#7af298]">// Skills</p>
            <div className="flex w-full gap-14 h-full  bg-[#131313] font-mono justify-start">
                <div className="flex flex-col max-w-2xl gap-3 py-8 rounded-2xl font-mono text-white">
                  <div className="flex flex-col font-sans gap-3 border-b pb-5 border-white/25">
                      <div className="flex justify-between">
                          <h1 className="text-md font-bold">Programming Languages</h1>
                          <Code2Icon className="text-[#7af298]"/>
                      </div>
                      <p className="text-sm text-gray-300">
                          PHP • Java-script • Type-script • HTML • CSS • Java • Oracle DB • SQL • PlSql
                      </p>
                  </div>
                  <div className="flex flex-col font-sans gap-3 border-b pb-5 border-white/25">
                      <div className="flex justify-between">
                          <h1 className="text-md font-bold">Developer Tools</h1>
                          <Code2Icon className="text-[#7af298]"/>
                      </div>
                      <p className="text-sm text-gray-300">
                          Git • Github • Postman • API • REST APIs • Docker • Xampp • UML • Enterprise Architect
                      </p>
                  </div>
                  <div className="flex flex-col font-sans gap-3 border-b pb-5 border-white/25">
                      <div className="flex justify-between">
                          <h1 className="text-md font-bold">Frameworks</h1>
                          <Code2Icon className="text-[#7af298]"/>
                      </div>
                      <p className="text-sm text-gray-300">
                          Reactjs • Tailwindcss • Laravel • Django
                      </p>
                  </div>
                  <div className="flex flex-col font-sans gap-3 border-b pb-5 border-white/25">
                      <div className="flex justify-between">
                          <h1 className="text-md font-bold">Security</h1>
                          <FolderKeyIcon className="text-[#7af298]"/>
                      </div>
                      <p className="text-sm text-gray-300">
                          Linux ( Nmap/Wireshark/Metasploit ) • Networking & Protocols • VirtualBox • Docker 
                      </p>
                  </div>
                </div>
                <div className="flex flex-col max-w-2xl gap-3 py-8 rounded-2xl font-mono text-white">
                  <p className="text-md font-sans font-normal max-w-lg">
                    I thrive on solving real-world problems, turning ideas into clean, 
                    maintainable code, and learning through experimentation.  
                    You’ll find me building side projects, diving into new tech stacks, 
                    or simply exploring what’s next in the world of web development.
                  </p>
                  <Link className="flex mr-auto my-6 items-center font-mono gap-2 border border-[#131313] bg-[#7af298] text-[#131313] p-2 px-3">
                    Download CV
                    <DownloadIcon className="size-4"/>
                  </Link>
                </div>
            </div>
            <div className="grid grid-cols-3 justify-evenly w-full gap-16 items-center mx-auto">
              <div className="p-7 border-b-2 border-white/25">
                <h3 className="text-[48px] font-sans text-white font-bold">9+</h3>
                <p className="text-[16px] font-sans text-[#7af298]">Years in IT</p>
              </div>
              <div className="p-7 border-b-2 border-white/25">
                <h3 className="text-[48px] font-sans text-white font-bold">2+</h3>
                <p className="text-[16px] font-sans text-[#7af298]">Years of Professional Experience</p>
              </div>
              <div className="p-7 border-b-2 border-white/25">
                <h3 className="text-[48px] font-sans text-white font-bold">50+</h3>
                <p className="text-[16px] font-sans  text-[#7af298]">Completed Projects</p>
              </div>
            </div>
          </div>

          {/* ********************** */}

          <div className="max-w-340 my-44 p-8 mx-auto flex flex-col">
            <div className="flex justify-between items-start py-8 rounded-2xl font-sans text-white">
              <p className="text-[16px] mt-3 text-[#7af298]">// Explore Work</p>
              <h3 className="text-[48px] font-bold max-w-lg leading-tight">
                A Showcase of My Latest Projects
              </h3>
            </div>
            <div className="flex items-center text-[#7af298] font-bold justify-between gap-1">
              {"</"}
              <div className="h-0.5 bg-[#505559] w-[90vw]"/>
              {">"}
            </div>

            <div className="flex gap-12 mt-12 justify-between items-center">
              <div className="flex flex-col gap-4 max-w-sm">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </main>

        <section className="flex flex-col py-15 bg-black/40">
            <div className="relative w-full overflow-hidden">
                  <div className="pointer-events-none absolute right-0 h-full w-16 bg-linear-to-l from-white to-transparent z-10" />
                    <div className="marquee">
                    {[...techFlex, ...techFlex].map((tech, index) => (
                      <div
                        key={`${tech.title}-${index}`}
                        className="flex items-center gap-4 mx-12 bg-white px-7 py-2"
                      >
                        <img
                          src={tech.icon}
                          alt={tech.title}
                          className="h-8 w-8 object-contain"
                        />
                        <span className="text-lg font-semibold text-[#111A4A]">
                          {tech.title}
                        </span>
                      </div>
                    ))} 
                  </div>
                </div>

        {/* <div className="mr-auto mt-4">
          <a className="flex items-center gap-2 bg-[#11001c] text-white p-2 px-3 rounded" href="#projects">
            Check out my projects
            <FolderGit2Icon className="w-4 h-4" />
          </a>
        </div> */}
        </section>

      </div>
      </div>
    </div>
  )
}
